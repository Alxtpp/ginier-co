/* =====================================================================
   Ginier & Co — interactions du site
   1. Slider avant/après (souris + tactile)
   2. Chips (radios / checkboxes) du formulaire
   3. Envoi du devis via Web3Forms (avec photos) + honeypot
   4. Menu mobile
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- 1. Slider avant / après (clip-path via --pos) ---------- */
  function initBA() {
    document.querySelectorAll(".ba").forEach(function (ba) {
      var handle = ba.querySelector(".ba-handle");

      function set(pct) {
        pct = Math.max(0, Math.min(100, pct));
        ba.style.setProperty("--pos", pct.toFixed(2) + "%");
      }
      function setFromX(clientX) {
        var r = ba.getBoundingClientRect();
        set(((clientX - r.left) / r.width) * 100);
      }

      var dragging = false;
      function start(e) { dragging = true; move(e); }
      function stop() { dragging = false; }
      function move(e) {
        if (!dragging) return;
        var x = e.touches ? e.touches[0].clientX : e.clientX;
        setFromX(x);
        if (e.cancelable) e.preventDefault();
      }

      ba.addEventListener("mousedown", start);
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", stop);
      ba.addEventListener("touchstart", start, { passive: false });
      ba.addEventListener("touchmove", move, { passive: false });
      ba.addEventListener("touchend", stop);

      // clavier (accessibilité)
      if (handle) {
        handle.setAttribute("tabindex", "0");
        handle.addEventListener("keydown", function (e) {
          var cur = parseFloat(getComputedStyle(ba).getPropertyValue("--pos")) || 50;
          if (e.key === "ArrowLeft") set(cur - 4);
          else if (e.key === "ArrowRight") set(cur + 4);
          else return;
          e.preventDefault();
        });
      }
    });
  }

  /* ---------- 2. Chips ---------- */
  function initChips() {
    document.querySelectorAll(".chip").forEach(function (c) {
      c.addEventListener("click", function () {
        var i = c.querySelector("input");
        if (i && i.type === "radio") {
          document.querySelectorAll(".chip").forEach(function (o) {
            var oi = o.querySelector("input");
            if (oi && oi.type === "radio" && oi.name === i.name) o.classList.remove("on");
          });
          c.classList.add("on");
          i.checked = true;
        } else if (i) {
          i.checked = !i.checked;
          c.classList.toggle("on", i.checked);
        }
      });
    });
  }

  /* ---------- 3. Envoi Web3Forms ---------- */
  function t(key, lang) {
    var d = window.GinierI18n && window.GinierI18n.dict[key];
    return d ? (d[lang] || d.fr) : key;
  }
  function lang() { return document.documentElement.getAttribute("lang") || "fr"; }

  function initQuoteForm() {
    var form = document.getElementById("quote-form");
    if (!form) return;
    var btn = form.querySelector('button[type="submit"]');
    var status = form.querySelector(".form-status");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // honeypot
      var hp = form.querySelector('input[name="botcheck"]');
      if (hp && hp.checked) return;

      var key = form.querySelector('input[name="access_key"]');
      // Garde-fou : clé Web3Forms non configurée
      if (!key || !key.value || key.value.indexOf("VOTRE_CLE") === 0) {
        if (status) {
          status.textContent = t("q.notconfig", lang());
          status.className = "form-status err";
        }
        return;
      }

      // Validation : le form est en novalidate, on vérifie donc à la main
      if (!form.checkValidity()) {
        form.reportValidity();
        if (status) {
          status.textContent = t("q.required", lang());
          status.className = "form-status err";
        }
        return;
      }

      var data = new FormData(form);
      // Web3Forms réserve les pièces jointes au plan Pro : tout champ fichier
      // ferait échouer l'envoi. Les photos passent par WhatsApp / e-mail.
      data.delete("attachment");
      if (btn) { btn.disabled = true; btn.textContent = t("q.sending", lang()); }
      if (status) { status.textContent = ""; status.className = "form-status"; }

      fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
        .then(function (r) { return r.json(); })
        .then(function (json) {
          if (json.success) {
            if (btn) btn.textContent = t("q.sent", lang());
            if (status) { status.textContent = t("q.backend", lang()); status.className = "form-status ok"; }
            form.querySelectorAll("input,select,textarea,button").forEach(function (el) {
              if (el.type !== "hidden") el.disabled = true;
            });
          } else { throw new Error(json.message || "error"); }
        })
        .catch(function () {
          if (btn) { btn.disabled = false; btn.textContent = t("q.submit", lang()); }
          if (status) { status.textContent = t("q.error", lang()); status.className = "form-status err"; }
        });
    });
  }

  /* ---------- 3b. Champs conditionnels du devis ----------
     Le formulaire s'adapte à la prestation choisie :
     - Déménagement : tout (2 adresses, volume complet, bloc meubles)
     - Transport    : 2 adresses, volume sans pièces/surface, bloc meubles
     - Débarras     : 1 seule adresse/accès, volume complet, pas de bloc meubles
     - Aménagement  : 1 seule adresse/accès, pas de volume, bloc aménagement */
  function initConditional() {
    var form = document.getElementById("quote-form");
    if (!form) return;

    var etages = document.getElementById("acces-etages");
    var colArrivee = document.getElementById("col-arrivee");
    var addrArrivee = document.getElementById("addr-arrivee");
    var fsVolume = document.getElementById("fs-volume");
    var blocMeubles = document.getElementById("bloc-meubles");
    var amenagement = document.getElementById("bloc-amenagement");
    var cartons = document.getElementById("cartons-detail");
    var chkCartons = document.getElementById("chk-cartons");
    var onlyMove = form.querySelectorAll(".only-move");
    var lblOne = form.querySelectorAll(".lbl-one");
    var lblTwo = form.querySelectorAll(".lbl-two");

    function checkedValue(name) {
      var el = form.querySelector('input[name="' + name + '"]:checked');
      return el ? el.value : null;
    }

    function update() {
      var p = checkedValue("Prestation");
      // Débarras et aménagement : un seul lieu, pas de trajet
      var single = (p === "Débarras" || p === "Aménagement d'intérieur");

      if (addrArrivee) addrArrivee.hidden = single;
      lblTwo.forEach(function (l) { l.hidden = single; });
      lblOne.forEach(function (l) { l.hidden = !single; });
      if (colArrivee) colArrivee.hidden = single;
      if (etages) etages.hidden = (checkedValue("Type_logement") === "Maison");

      if (fsVolume) fsVolume.hidden = (p === "Aménagement d'intérieur");
      onlyMove.forEach(function (d) { d.hidden = (p === "Transport de marchandise"); });

      if (blocMeubles) blocMeubles.hidden = single;
      if (cartons) cartons.hidden = (single || !(chkCartons && chkCartons.checked));
      if (amenagement) amenagement.hidden = (p !== "Aménagement d'intérieur");
    }

    // Les chips modifient l'état via JS sans émettre "change" :
    // on relit l'état après chaque clic dans le formulaire (différé).
    form.addEventListener("click", function () { setTimeout(update, 0); });
    form.addEventListener("change", update);
    update();
  }

  /* ---------- 4. Menu mobile ---------- */
  function initMobileMenu() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      var open = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", open);
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); });
    });
  }

  function boot() { initBA(); initChips(); initConditional(); initQuoteForm(); initMobileMenu(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
