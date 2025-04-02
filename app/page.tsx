import { RootContainer } from "@/components/root_container";
import { Information, Name, Title, Location } from "@/components/information";
import { Footer, ExternalNavigator } from "@/components/footer";

const personal_information = {
  name: "Markus Smith",
  title: "Full Stack Developer",
  location: "North Carolina, United States"
}

const github = {
  link: "https://github.com/Kastenhal",
  icon: "/github.svg"
}

const linkedin = {
  link: "https://www.linkedin.com/in/markus-smith-504666357/",
  icon: "/linkedin.svg"
}


const youtube = {
  link: "https://www.youtube.com/@Kastenhal/",
  icon: "/youtube.svg"
}

export default function Home() {
  return (
    <>
      <RootContainer>
        <Information>
          <Name>{personal_information.name}</Name>
          <Title>{personal_information.title}</Title>
          <Location>{personal_information.location}</Location>
        </Information>
        <Footer>
          <ExternalNavigator href={github.link} icon={github.icon}></ExternalNavigator>
          <ExternalNavigator href={linkedin.link} icon={linkedin.icon}></ExternalNavigator>
          <ExternalNavigator href={youtube.link} icon={youtube.icon}></ExternalNavigator>
        </Footer>
      </RootContainer>
    </>
  );
}