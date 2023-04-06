import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of form Data:")
    console.log(formData)
  }

  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Vashu"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Sharma"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="vashu4842@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>United States</option>
          <option>Mexico</option>
        </select>

        <br />

        <label htmlFor="street">Street Adress</label>
        <br />
        <input
          type="street"
          name="street"
          id="street"
          placeholder="Adarsh Vihar"
          value={formData.street}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <label htmlFor="city">City</label>
        <br />
        <input
          type="city"
          name="city"
          id="city"
          placeholder="Shamli"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <label htmlFor="state">State / Province</label>
        <br />
        <input
          type="numeric"
          name="state"
          id="state"
          placeholder="Uttar Pradesh"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <label htmlFor="zip">Zip / Postal Code</label>
        <br />
        <input
          type="zip"
          name="zip"
          id="zip"
          placeholder="247776"
          value={formData.zip}
          onChange={changeHandler}
          className="outline"
        />

        <fieldset>
          <legend>By Email</legend>
          <div className="flex flex-row">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label>Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label>Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label>Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <input
            type="radio"
            name="pushNotification"
            id="pushEverything"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushNotification">Everything</label>
          <p>These are delivered via SMS to your mobile phone.</p>
          <input
            type="radio"
            name="pushNotification"
            id="pushEmail"
            value="Same as Email"
            onChange={changeHandler}
          />
          <label htmlFor="pushNotification">Same as Email</label>
          <p>These are delivered via SMS to your mobile phone.</p>
          <input
            type="radio"
            name="pushNotification"
            id="pushNothing"
            value="No Push Notifications"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notifications</label>
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4"
        >Save</button>

      </form>
    </div>
  );
}

export default App;
