import logoImg from '../assets/cloud.png';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Quiz logo" />
      <h1>Cloud Practitioner Quiz</h1>
    </header>
  );
}
