  import axios from "axios";
  import { useEffect, useState } from "react";
  import "../assets/css/order.css";
  import { API_URL } from "../constants";
import { useSearchParams } from "react-router-dom";

  const OrderForm = () => {
    const [searchParams] = useSearchParams(); 

    useEffect(() => {
      const packageType = searchParams.get("package");
  
      if (packageType === "1") {
        setFormData((prevState) => ({
          ...prevState,
          quantity: 1,
        }));
      } else if (packageType === "2") {
        setFormData((prevState) => ({
          ...prevState,
          quantity: 2,
        }));
      } else if (packageType === "3") {
        setFormData((prevState) => ({
          ...prevState,
          quantity: 3,
        }));
      }
    }, [searchParams]);

    // const packageArg = new URLSearchParams(location.search).get("package");
    const [formData, setFormData] = useState({
      name: "",
      phoneNumber: "",
      altPhoneNumber: "",
      address: "",
      quantity: 1,
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      try {
        const response = await axios.post(API_URL+ "strongman-data/", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (response.status === 200) {
          alert("Order submitted successfully!");
          console.log(response.data);
        } else {
          console.error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    

    return (
      <div className="order-page">
        <div className="elementor-section-wrap">
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-10a34a4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="10a34a4"
            data-element_type="section"
            data-settings='{"background_background":"classic"}'
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d800bd6"
                  data-id="d800bd6"
                  data-element_type="column"
                >
                  <div className="elementor-column-wrap elementor-element-populated">
                    <div className="elementor-widget-wrap">
                      <div
                        className="elementor-element elementor-element-7dca5ee elementor-widget elementor-widget-heading"
                        data-id="7dca5ee"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-size-default top-section-heading">
                            Fill in your correct details so we can send your order
                            to you... Please, do not fill this form if you are not
                            ready to buy.
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="elementor-section elementor-form-section elementor-element elementor-element-bc29fee elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="bc29fee"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-74737e2"
                  data-id="74737e2"
                  data-element_type="column"
                >
                  <div className="elementor-column-wrap elementor-element-populated">
                    <div className="elementor-widget-wrap">
                      <div
                        className="elementor-element elementor-element-1a4053f elementor-widget elementor-widget-heading"
                        data-id="1a4053f"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-form-title elementor-size-default">
                            <form
                              id="wpforms-form-2524"
                              className="wpforms-validate wpforms-form"
                              onSubmit={handleSubmit}
                            >
                              <div className="wpforms-field-container">
                                <div
                                  id="wpforms-2524-field_1-container"
                                  className="wpforms-field wpforms-field-text"
                                  data-field-id="1"
                                >
                                  <label
                                    className="wpforms-field-label"
                                    htmlFor="wpforms-2524-field_1"
                                  >
                                    NAME{" "}
                                    <span className="wpforms-required-label">
                                      *
                                    </span>
                                  </label>
                                  <input
                                    type="text"
                                    id="wpforms-2524-field_1"
                                    className="wpforms-field-medium wpforms-field-required"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                  />
                                </div>

                                <div
                                  id="wpforms-2524-field_2-container"
                                  className="wpforms-field wpforms-field-text"
                                  data-field-id="2"
                                >
                                  <label
                                    className="wpforms-field-label"
                                    htmlFor="wpforms-2524-field_2"
                                  >
                                    Phone Number{" "}
                                    <span className="wpforms-required-label">
                                      *
                                    </span>
                                  </label>
                                  <input
                                    type="text"
                                    id="wpforms-2524-field_2"
                                    className="wpforms-field-medium wpforms-field-required"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>

                                <div
                                  id="wpforms-2524-field_5-container"
                                  className="wpforms-field wpforms-field-text"
                                  data-field-id="5"
                                >
                                  <label
                                    className="wpforms-field-label"
                                    htmlFor="wpforms-2524-field_5"
                                  >
                                    ALTERNATIVE Phone Number{" "}
                                    <span className="wpforms-required-label">
                                      *
                                    </span>
                                  </label>
                                  <input
                                    type="text"
                                    id="wpforms-2524-field_5"
                                    className="wpforms-field-medium wpforms-field-required"
                                    name="altPhoneNumber"
                                    value={formData.altPhoneNumber}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>

                                <div
                                  id="wpforms-2524-field_3-container"
                                  className="wpforms-field wpforms-field-text"
                                  data-field-id="3"
                                >
                                  <label
                                    className="wpforms-field-label"
                                    htmlFor="wpforms-2524-field_3"
                                  >
                                    Address{" "}
                                    <span className="wpforms-required-label">
                                      *
                                    </span>
                                  </label>
                                  <input
                                    type="text"
                                    id="wpforms-2524-field_3"
                                    className="wpforms-field-medium wpforms-field-required"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>

                                <div
                                  id="field_4_container"
                                  className="wpforms-field wpforms-field-select"
                                  data-field-id="4"
                                >
                                  <label
                                    className="wpforms-field-label"
                                    htmlFor="wpforms-2524-field_4"
                                  >
                                    Quantities{" "}
                                    <span className="wpforms-required-label">
                                      *
                                    </span>
                                  </label>
                                  <select
                                    id="wpforms-2524-field_4"
                                    className="wpforms-field-medium wpforms-field-required"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    required
                                  >
                                    <option value={1}>
                                      BUY ONE: 2999 KES
                                    </option>
                                    <option value={2}>
                                      BUY TWO: 5499 KES
                                    </option>
                                    <option value={3}>
                                      BUY THREE: 7499 KES
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div className="wpforms-field wpforms-field-hp">
                                <label
                                  htmlFor="wpforms-2524-field-hp"
                                  className="wpforms-field-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="text"
                                  name="wpforms[hp]"
                                  id="wpforms-2524-field-hp"
                                  className="wpforms-field-medium"
                                />
                              </div>

                              <div className="wpforms-submit-container">
                                <input
                                  type="hidden"
                                  name="wpforms[id]"
                                  value="2524"
                                />
                                <input
                                  type="hidden"
                                  name="wpforms[author]"
                                  value="1"
                                />
                                <input
                                  type="hidden"
                                  name="wpforms[post_id]"
                                  value="2525"
                                />
                                <button
                                  type="submit"
                                  name="wpforms[submit]"
                                  className="wpforms-submit"
                                  id="wpforms-submit-2524"
                                  value="wpforms-submit"
                                  aria-live="assertive"
                                  data-alt-text="Sending..."
                                  data-submit-text="Submit"
                                >
                                  Submit
                                </button>
                              </div>
                            </form>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="elementor-section elementor-bottom-section elementor-element elementor-element-75cc977 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="75cc977"
            data-element_type="section"
            data-settings='{"background_background":"classic"}'
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9177212"
                  data-id="9177212"
                  data-element_type="column"
                >
                  <div className="elementor-column-wrap elementor-element-populated">
                    <div className="elementor-widget-wrap">
                      <div
                        className="elementor-element elementor-element-9083d06 elementor-widget elementor-widget-heading"
                        data-id="9083d06"
                        data-element_type="widget"
                        data-widget_type="heading.default"  
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Thanks for your patronage; we expect your feedback
                            shortly!!!
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };

  export default OrderForm;
