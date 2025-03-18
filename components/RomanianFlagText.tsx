export default function RomanianText() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      {["Authentic", "Romanian", "Products"].map((word, index) => (
        <span
          key={index}
          style={{
            background: "linear-gradient(to right, #002B7F 33%, #FCD116 33%, #FCD116 66%, #CE1126 66%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            padding: "10px 20px",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

	// 1.	🔵 Blue → #002B7F (Darker, better contrast)
	// 2.	🟡 Yellow → #FCD116 (Vibrant but readable)
	// 3.	🔴 Red → #CE1126 (Deep red, good contrast)