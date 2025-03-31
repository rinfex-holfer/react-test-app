import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Hello world</h1>
    </div>
  );
};
