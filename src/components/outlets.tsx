interface ChildProps {
  children: React.ReactNode;
}

const Outlets: React.FC<ChildProps> = ({ children }) => {
  return (
    <div>
      <header></header>

      <section>{children}</section>

      <footer></footer>
    </div>
  );
};

export default Outlets;
