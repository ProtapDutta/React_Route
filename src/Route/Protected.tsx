import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  isSignedIn: boolean;
  children: React.ReactNode;
}

const Protected = ({ isSignedIn, children }: Props) => {
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default Protected;