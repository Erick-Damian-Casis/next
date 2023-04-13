export const DarkLayout = ({children}) => {
  return(
      <div style={{
          backgroundColor: "black",
          padding: "10px",
          borderRadius: "5px",
          color: "white",
      }}>
          <h2>Dark Layout</h2>
          <div>
              {children}
          </div>
      </div>
  )
}
