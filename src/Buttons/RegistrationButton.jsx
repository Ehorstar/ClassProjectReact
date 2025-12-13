import React from "react";
import { useNavigate } from "react-router";
import { UserAddOutlined } from "@ant-design/icons";

const RegistrationButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("registration")} className="btn-icon">
        <UserAddOutlined />
      </button>
    </div>
  );
};

export default RegistrationButton;
