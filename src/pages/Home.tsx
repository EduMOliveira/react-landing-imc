import { FaAsterisk, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import { Button } from "../components/Button";
import { Feature } from "../components/Feature";
import { ButtonStore } from "../components/ButtonStore";
import { Spacer } from "../components/Spacer";
import { Input } from "../components/Input";
import { Header } from "../components/Header";

import introBg from "../assets/images/bg.png";
import featureOne from "../assets/images/feature1.png";
import featureTwo from "../assets/images/feature2.png";
import featureThree from "../assets/images/feature3.png";
import mockupOne from "../assets/images/mockup1.png";
import mockupTwo from "../assets/images/mockup2.png";
import playStore from "../assets/images/play-store.svg";
import appStore from "../assets/images/app-store.svg";
import logo from "../assets/images/logo.png";

import "../styles/home.scss";

export function Home() {
  return (
    <div id="home-page">
      <Header />

      <div className="intro">
        <div className="intro_texts">
          <small>
            <FaAsterisk /> Totalmente gratuito
          </small>
          <strong>Sua Saúde na Palma da sua Mão.</strong>
          <p>calcule seu índice de massa corporal usando um smartphone ou tablet.</p>
          <Button>Começe Agora!</Button>
        </div>
        <div className="intro_image">
          <img src={introBg} alt="apresentação imczin" />
        </div>
      </div>

      <div className="features">
        <strong>Como isso Funciona</strong>
        <p>Através de uma interface amigável você consegue ter acesso ao seu IMC.</p>
        <div className="features_row">
          <Feature
            img={featureOne}
            title="Informação"
            text="Preencha suas informações nos campos solicitados e aperte calcular."
          />
          <Feature
            img={featureTwo}
            title="Analise"
            text="Os dados inseridos por você serão processados e analisados de forma rápida."
          />
          <Feature
            img={featureThree}
            title="Resultado"
            text="O resultado aparecerá através de uma interface intuitiva para um fácil entendimento."
          />
        </div>
        <Spacer />
      </div>

      <div className="content">
        <div className="content_container m-right-50">
          <img src={mockupOne} alt="" />
          <div className="content_desc">
            <strong>Download</strong>
            <p>
              Realize o download da aplicação de forma gratuita através das lojas AppStore e PlayStore diretamente no
              seu smartphone ou clicando nos botões abaixo
            </p>

            <div className="content_buttons">
              <ButtonStore img={appStore} text="App Store" onClick={() => {}} />
              <ButtonStore img={playStore} text="Play Store" onClick={() => {}} />
            </div>
          </div>
        </div>

        <div className="content_container m-left-50">
          <div className="content_desc">
            <strong>Calcule de maneira fácil e rápida.</strong>
            <p>
              Todo o processo para o calculo do seu Índice de Massa Corpórea, desde a inserção dos dados até o resultado
              ser apresentado, não levará mais do que alguns segundos.
            </p>
          </div>
          <img src={mockupTwo} alt="" />
        </div>
      </div>

      <div className="newsletter">
        <Spacer />

        <strong>Inscreva-se</strong>
        <p>Receba novidades diretamente no seu e-mail.</p>

        <form>
          <Input placeholder="Enter your email." />
          <Button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Assinar
          </Button>
        </form>
      </div>

      <div className="footer">
        <div></div>
        <div className="footer_cols">
          <div className="footer_left-col">
            <img src={logo} alt="" />
            <p>calcule seu índice de massa corporal usando um smartphone ou tablet.</p>
            <div className="footer_social-container">
              <div>
                <FaFacebookF size="16" color="#747171" />
              </div>
              <div>
                <FaTwitter size="16" color="#747171" />
              </div>
              <div>
                <FaLinkedinIn size="16" color="#747171" />
              </div>
            </div>
          </div>

          <div className="footer_right-col">
            <strong>Links</strong>

            <ul>
              <li>About</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="footer_copyright">
          <div>
            <p>Copyright © 2021 MDO</p>
            <p>
              Created by <b>Eduardo</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
