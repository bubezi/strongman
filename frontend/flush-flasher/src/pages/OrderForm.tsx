import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../assets/css/order.css";
import { API_URL } from "../constants";

const OrderForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    altPhoneNumber: "",
    address: "",
    quantity: 1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill quantity if ?package=1|2|3
  useEffect(() => {
    const pkg = searchParams.get("package");
    if (pkg === "1" || pkg === "2" || pkg === "3") {
      setFormData((prev) => ({ ...prev, quantity: Number(pkg) }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${API_URL}flush-flasher-data/`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 201) {
        alert("Order submitted successfully!");
        navigate("/thankyou");
      } else {
        console.error("Failed to submit form", response);
        alert("Oops—something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="order-page">
      <div className="elementor-section-wrap">
        {/* Top Instruction Section */}
        <section
          className="elementor-section elementor-top-section"
          data-element_type="section"
        >
          <div className="elementor-container">
            <h2 className="top-section-heading">
              Fill in your correct details so we can send your order to you…
              Please, do not fill this form if you are not ready to buy.
            </h2>
          </div>
        </section>

        {/* Form Section */}
        <section
          className="elementor-section elementor-form-section"
          data-element_type="section"
        >
          <div className="elementor-container">
            <div className="elementor-widget-wrap">
              <h2 className="elementor-form-title">Place Your Order</h2>

              <form
                id="order-form"
                className="wpforms-form"
                onSubmit={handleSubmit}
              >
                <div className="wpforms-field-container">
                  <div className="wpforms-field wpforms-field-text">
                    <label htmlFor="name">
                      NAME <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="wpforms-field wpforms-field-text">
                    <label htmlFor="phoneNumber">
                      Phone Number <span>*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="wpforms-field wpforms-field-text">
                    <label htmlFor="altPhoneNumber">
                      Alternative Phone Number <span>*</span>
                    </label>
                    <input
                      type="tel"
                      id="altPhoneNumber"
                      name="altPhoneNumber"
                      required
                      value={formData.altPhoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="wpforms-field wpforms-field-text">
                    <label htmlFor="address">
                      Address <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="wpforms-field wpforms-field-select">
                    <label htmlFor="quantity">
                      Quantities <span>*</span>
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                    >
                      <option value={1}>BUY ONE: 2999 KES</option>
                      <option value={2}>BUY TWO: 5499 KES</option>
                      <option value={3}>BUY THREE: 7499 KES</option>
                    </select>
                  </div>
                </div>

                {/* Honeypot field */}
                <div className="wpforms-field wpforms-field-hp">
                  <label htmlFor="hp">Email</label>
                  <input
                    type="text"
                    name="wpforms[hp]"
                    id="hp"
                    className="hp"
                  />
                </div>

                <div className="wpforms-submit-container">
                  <button
                    type="submit"
                    className="wpforms-submit"
                    disabled={isSubmitting}
                    data-alt-text="Sending…"
                    data-submit-text="Submit"
                  >
                    {isSubmitting ? "Sending…" : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Bottom Thank-You Section */}
        <section
          className="elementor-section elementor-bottom-section"
          data-element_type="section"
        >
          <div className="elementor-container">
            <h2 className="elementor-heading-title">
              Thanks for your patronage; we expect your feedback shortly!!!
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderForm;
