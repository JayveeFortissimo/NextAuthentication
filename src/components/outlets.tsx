interface ChildProps {
  children: React.ReactNode;
}

const Outlets: React.FC<ChildProps> = ({ children }) => {
  return (
    <div>
    
      {children}

      <footer></footer>
    </div>
  );
};

export default Outlets;
