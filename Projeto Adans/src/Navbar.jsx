import "./style.css";
import logo from "./Imagens/logo.svg";

function Navbar() {
  const estiloImagem = {
    width: "34px", // Largura da imagem
    height: "auto", // Altura ajustada automaticamente para manter a proporção
    margin: "7px",
  };

  return (
    <div className="details">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" style={estiloImagem} />
          <div className="navbar">
            <a>Product</a>
            <a>Pricing</a>
            <a>Company</a>
            <a>Ressources</a>
          </div>
        </div>

        <div>
          <button className="buyVulk">Buy Vulk</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
