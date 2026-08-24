(() => {
  const phoneOk = (value) => {
    const digits = String(value || "").replace(/[^\d+]/g, "");
    return /^(\+?92|0)?3\d{9}$/.test(digits) || /^(\+?\d{10,14})$/.test(digits);
  };

  const showErrors = (form, errors = {}) => {
    form.querySelectorAll(".field").forEach((field) => field.classList.remove("is-invalid"));
    form.querySelectorAll("[data-error]").forEach((el) => {
      el.textContent = "";
    });
    Object.entries(errors).forEach(([key, msg]) => {
      const box = form.querySelector(`[data-error="${key}"]`);
      if (box) {
        box.textContent = msg;
        box.closest(".field")?.classList.add("is-invalid");
      }
    });
  };

  const validateBooking = (data) => {
    const errors = {};
    if (!data.name || data.name.trim().length < 2) errors.name = "Please enter your full name.";
    if (!phoneOk(data.phone)) errors.phone = "Please enter a valid phone number.";
    if (!data.date) errors.date = "Please choose a preferred date.";
    if (!data.time) errors.time = "Please choose a preferred time.";
    if (!data.service) errors.service = "Please choose a service.";
    return errors;
  };

  const validateContact = (data) => {
    const errors = {};
    if (!data.name || data.name.trim().length < 2) errors.name = "Please enter your name.";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "");
    if (!phoneOk(data.phone) && !emailOk) {
      errors.phone = "Please share a phone number or a valid email.";
    }
    if (!data.message || data.message.trim().length < 8) {
      errors.message = "Please write a short message.";
    }
    return errors;
  };

  const bind = (form, { validate, success, endpoint }) => {
    if (!form) return;
    const status = form.querySelector(".form-status");
    const submit = form.querySelector('[type="submit"]');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const payload = Object.fromEntries(new FormData(form).entries());
      const errors = validate(payload);
      showErrors(form, errors);
      if (Object.keys(errors).length) {
        if (status) status.textContent = "Please check the highlighted fields.";
        const firstInvalid = form.querySelector(".is-invalid input, .is-invalid select, .is-invalid textarea");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (submit) submit.disabled = true;
      if (status) status.textContent = "Sending…";

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json.ok) {
          showErrors(form, json.errors || {});
          if (status) status.textContent = json.message || "Something went wrong. Please call the salon.";
          return;
        }
        form.classList.add("is-hidden");
        if (success) {
          success.classList.add("is-visible");
          const text = success.querySelector("#booking-success-text");
          if (text && json.message) text.textContent = json.message;
          success.focus?.();
        }
        if (status) status.textContent = "";
      } catch {
        if (status) {
          status.textContent = "The request could not be sent. Please call 0344 2782872.";
        }
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  };

  const booking = document.getElementById("booking-form");
  if (booking) {
    const params = new URLSearchParams(window.location.search);
    const preset = params.get("service");
    if (preset) {
      const select = booking.querySelector("#b-service");
      if (select && [...select.options].some((o) => o.value === preset)) {
        select.value = preset;
      }
    }
    const date = booking.querySelector("#b-date");
    if (date) {
      const today = new Date();
      const iso = today.toISOString().slice(0, 10);
      date.min = iso;
    }
    bind(booking, {
      validate: validateBooking,
      success: document.getElementById("booking-success"),
      endpoint: "/api/booking",
    });
  }

  bind(document.getElementById("contact-form"), {
    validate: validateContact,
    success: document.getElementById("contact-success"),
    endpoint: "/api/contact",
  });
})();
