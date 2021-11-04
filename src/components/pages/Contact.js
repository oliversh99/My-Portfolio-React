import React from "react";

export default function Contact() {
  return (
    <section className="container">
      <h2 data-testid="h1tag" className="top-title">
        Contact Form
      </h2>
      <hr></hr>
      <form class="justify-content-center" id="contact-form">
        <div class="mt-5">
          <label htmlFor="name">Name:</label>
          <input class="form-control" type="text" name="name" />
        </div>
        <div class="mt-5">
          <label htmlFor="email">Email Address:</label>
          <input class="form-control" type="email" name="email" />
        </div>
        <div class="mt-5">
          <label htmlFor="message">Message:</label>
          <textarea class="form-control" name="message" rows="7" />
        </div>

        <div class="mt-5 mb-5">
          <button
            data-testid="button"
            class="btn btn-outline-dark "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
