import Link from 'next/link'

import { RootContainer } from "@/components/root_container";
import { Information, Name, Title, Location, Pages } from "@/components/information";
import { Footer, ExternalNavigator } from "@/components/footer";

const personal_information = {
  name: "Kastenhal Overguard",
  title: "Software Engineer",
  location: "North Carolina, United States"
}

const github = {
  link: "https://github.com/Kastenhal",
  icon: "/github.svg"
}


const youtube = {
  link: "https://www.youtube.com/@Kastenhal/",
  icon: "/youtube.svg"
}

export default function Page() {
  return (
    <>
      <RootContainer>
        <Information>
          <Name>{personal_information.name}</Name>
          <Title>{personal_information.title}</Title>
          <Location>{personal_information.location}</Location>
          <Pages>
            <Link className="hover:underline" href="/projects">Projects</Link>
            <Link className="hover:underline" href="/blog">Blog</Link>
          </Pages>
        </Information>
        <Footer>
          <ExternalNavigator href={github.link} icon={github.icon}></ExternalNavigator>
          <ExternalNavigator href={youtube.link} icon={youtube.icon}></ExternalNavigator>
        </Footer>
      </RootContainer>
    </>
  );
}