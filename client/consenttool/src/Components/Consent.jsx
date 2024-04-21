// // ConsentForm.js
// import React, { useState } from "react";
// import axios from "axios";

// const Consent = () => {
//   const [formData, setFormData] = useState({
//     userId: "",
//     dataFiduciaryId: "",
//     consentStatus: "",
//     consentType: "",
//     timestamp: "",
//     purpose: "",
//     duration: "",
//     withdrawalInfo: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Make a POST request to your Express API to save the consent data
//       await axios.post("/api/consents", formData);
//       console.log("Consent saved successfully");
//       // Clear the form fields after successful submission
//       setFormData({
//         userId: "",
//         dataFiduciaryId: "",
//         consentStatus: "",
//         consentType: "",
//         timestamp: "",
//         purpose: "",
//         duration: "",
//         withdrawalInfo: "",
//       });
//     } catch (error) {
//       console.error("Error saving consent:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Consent Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="userId" className="form-label">
//             User ID
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="userId"
//             name="userId"
//             value={formData.userId}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="dataFiduciaryId" className="form-label">
//             DataFid ID
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="userId"
//             name="userId"
//             value={formData.userId}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Consent;
