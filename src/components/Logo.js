import React from "react";
import logoStyles from "./Logo.module.scss";

const LogoContentTypes = {
  PRIMARY: "primary",
  MINIMAL: "minimal"
};
const MinimalContent = () => {
  return (
    <div className={logoStyles.logoMinimalWrapper}>
      <span className={`${logoStyles.contentMinimal}`}>
        <span>{`thebao`}</span>
        <span>{`dev_`}</span>
      </span>
    </div>
  );
};

const PrimaryContent = () => {
  return (
    <div className={logoStyles.logoWrapper}>
      <div className={logoStyles.logoText}>
        <span className={`${logoStyles.extra} ${logoStyles.extraLeft}`} />
        <span className={`${logoStyles.extra} ${logoStyles.extraRight}`} />
        <span className={logoStyles.content}>
          <span className={logoStyles.name}>{`thebao`}</span>
          <span className={logoStyles.key}>{`dev`}</span>
        </span>
      </div>
    </div>
  );
};

const Logo = ({ state }) => {
  const renderLogoContent = () => ({
    primary: <PrimaryContent />,
    minimal: <MinimalContent />
  });

  return renderLogoContent()[state];
};

export default Logo;
export { LogoContentTypes };
