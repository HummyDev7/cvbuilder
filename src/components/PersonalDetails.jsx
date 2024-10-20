export default function PersonalDetailForm() {
  
  return (
    <div className="p-d__container">
      <h2>Personal Details</h2>
      <div className="p-d__form">
        <div className="name__input input__form">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Jhon Doe"
          />
        </div>
        <div className="job__input input__form">
          <label htmlFor="jobtitle">Job Title</label>
          <input
            type="text"
            name="jobtitle"
            id="jobtitle"
            placeholder="Full Stack Developer"
          />
        </div>
        <div className="email__input input__form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="jhondoe@gmail.com"
          />
        </div>
        <div className="phone__input input__form">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="9637628192"
          />
        </div>
        <div className="address__input input__form">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Wano Philippines, 291"
          />
        </div>
        <button
          type="submit"
          className="p-d__btn"
        >
          Save
        </button>
      </div>
    </div>
  );
}
