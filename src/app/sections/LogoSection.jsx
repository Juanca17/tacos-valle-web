import FixedLogo from "../components/FixedLogo";

export const LogoSection = ({ hidden, cerrosilla }) => {
  const cerrosillaStyle = {
    bottom: "38px",
  };
  return (
    <div
      className={`z-20 w-screen flex justify-center transition-opacity duration-700 ease-in-out ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        bottom: "0",
        background: "#EAE8DF",
        paddingBottom: "18px",
        paddingTop: "18px",
      }}
    >
      <FixedLogo className="fixed-logo" color={"#FF4200"} />
    </div>
  );
};
