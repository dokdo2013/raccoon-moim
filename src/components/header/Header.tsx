import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex justify-between my-4">
      <h1 className="text-2xl font-bold">Welcome to 모각작!</h1>
      <Button size="sm">로그인</Button>
    </header>
  );
};

export default Header;
