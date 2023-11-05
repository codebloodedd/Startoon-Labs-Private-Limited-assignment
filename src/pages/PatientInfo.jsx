import React from "react";
import "./PatientInfo.css";
import { user } from "../assets";
import SemiCircularChart from "../components/SemiCircleChart/SemiCircularChart";

const PatientInfo = () => {

  const patient = {
    id: 8720239436046,
    name: "S. Meena",
    age: 51,
    gender: "Female",
    email: "pratham@gmail.com",
    phone: "+919999999999",
    img: user,
  };

  const Report = {
    CompletionPercentage: 40,
    AffectedSide: "Bilateral",
    Condition: "Ortho",
    Speciality: "Osteoarthritis",
    MedicalHistory: {
        Diabetes: true,
        Hypertension: true,
        HeartDisease: false,
        Stroke: false,
        DM: true,
        Hypothyrodism: true,
    },
  };

  const medicalHistoryItems = Object.entries(Report.MedicalHistory).map(
    ([key, value]) => {
      if (value) {
        return (
          <div key={key} className="flex justify-between">
            <p className="text-sm">{key}</p>
            {/* <p style={{ color: "#002647" }}>✔️</p> */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="16px"
                height="16px"
                stroke="#002647"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>
        );
      }
      return null;
    }
  );

  return (
    <div className="flex main_container p-8">
      <div className="info-container h-full flex flex-col justify-center">
        <div className="flex flex-col items-center mb-10">
          <img
            src={patient.img}
            alt="User Profile"
            className="w-24 h-24 rounded-full mb-6"
          />
          <h2 className="text-xl font-bold">{patient.name}</h2>
          <p className="text-gray-600">
            {patient.gender}/{patient.age}
          </p>
        </div>
        <div className="px-4 space-y-3">
          <div className="flex justify-between">
            <p>Patient Id:</p>
            <p className="font-medium">{patient.id}</p>
          </div>
          <div className="flex justify-between">
            <p>Phone no.:</p>
            <p className="font-medium">{patient.phone}</p>
          </div>
          <div className="flex justify-between">
            <p>Mail Id:</p>
            <p className="font-medium">{patient.email}</p>
          </div>
        </div>
      </div>
      <div className="h-full record-container">
        <h2 className="text-2xl font-bold mb-4">Medical Reports</h2>
        <div className="my-2 py-2 flex flex-col bg-primary text-tertiary shadow-md rounded-md justify-center items-center">
          <p className="font-medium text-2xl">Goal Reached</p>
          <div
            className="semi-donut-model-2 margin"
            style={{
              "--percentage": `${Report.CompletionPercentage}`,
              "--fill": "#37DD0D",
              margin: "25px",
            }}
          >
            <p className="text-4xl font-semibold">
              {Report.CompletionPercentage}%
            </p>
          </div>
        </div>
        <div className="record-info">
          <div className="record-info-other px-4 space-y-1">
            <div className="flex justify-between">
              <p>Affected side:</p>
              <p className="font-medium">{Report.AffectedSide}</p>
            </div>
            <div className="flex justify-between">
              <p>Condition:</p>
              <p className="font-medium">{Report.Condition}</p>
            </div>
            <div className="flex justify-between">
              <p>Speciality:</p>
              <p className="font-medium">{Report.Speciality}</p>
            </div>
          </div>
          <div className="record-info-history px-4">
            <p className="text-lg font-semibold">Medical History</p>
            {medicalHistoryItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
