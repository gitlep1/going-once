import { useState } from "react";
import styled from "styled-components";
import streetchair from '../assets/streetchair.jpg'
import GetCurrentLocation from "../components/GetCurrentLocation";
import SplashLocation from "../components/SplashLocation";

const SplashDiv = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-image: url(${streetchair});
  background-size: cover;
  background-position: center center;
`;

const TitleStyle = styled.h1`
  font-size: 8rem;
  margin: 4rem 0 3rem 0;
  color: #fefefe;
  text-shadow: #000 2px 2px 5px;
`;

export default function SplashPage(props) {
  const [location, setLocation] = useState({})

  return (
    <SplashDiv>
      <TitleStyle>Going Once!</TitleStyle>
      <GetCurrentLocation setLocation={setLocation} />
      <SplashLocation location={location} />
    </SplashDiv>
  )
}