const Avatar = ({ name }) => {
    const firstLetter = name ? name.charAt(0).toUpperCase() : "?"; // İlk harfi al ve büyük harfe çevir
  
    return (
      <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#3498db", // Avatar rengi
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
        textTransform: "uppercase"
      }}>
        {firstLetter}
      </div>
    );
  };
  
  export default Avatar;
  