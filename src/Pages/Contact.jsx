import React from "react";

const Contact = () => {
  return (
    <div className="bg-info py-5">
      <div className="container">
        <h2 className="text-center text-white fw-bold mb-5">
          Contact Us
        </h2>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <form className="bg-white p-4 rounded shadow">

              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label fw-semibold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="form-label fw-semibold"
                >
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-info w-100 text-white fw-bold">
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;