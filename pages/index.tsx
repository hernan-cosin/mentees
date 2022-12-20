import { Large, Title } from "UI/text";
import css from "../styles/index.module.css";
import { Layout } from "components/layout";
import { CardsContainer } from "../styles/styled";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import MentorCard from "components/mentor-card";
import { useMentors } from "hooks/mentor";

const ViewHeight = styled.div`
  min-height: 100vh;
`;

export default function Home() {
  const mentors = [
    {
      id: "3LyenQMXrBf6mvxjKkkf",
      email: "hcosin@gmail.com",
      category: "Dev",
      community: "Disccord",
      description: "Test",
      image:
        "https://res.cloudinary.com/drjnku02p/image/upload/v1670947931/q3sb7ljnmmh20jr7ucwn.jpg",
      name: "Hernan Prueba",
    },
    {
      id: "42SVSpfxhxMVNpqgXikT",
      name: "Jhon 3",
      community: "DiscordLink",
      description: "Jhon description",
      category: "Developer",
      email: "JhonEmail@gmail.com",
      image:
        "https://res.cloudinary.com/drjnku02p/image/upload/v1670940535/ou0wmbysnefzfuzalq1c.jpg",
    },
    {
      id: "6mx2h78YeOLF3sQr7AeD",
      description: "Test",
      community: "Disccord",
      name: "Hernan Prueba 2",
      category: "Dev",
      email: "hcosin@gmail.com",
      image:
        "https://res.cloudinary.com/drjnku02p/image/upload/v1670947984/crgahw6bwwsjw7cwb57f.jpg",
    },
    {
      id: "KeaCxOxzY5LVXnYcRVrK",
      community: "https://discord.com/micomunidad",
      image:
        "data:image/jpeg;base64,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",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      category: "programming",
      name: "marcos",
    },
    {
      id: "svW9EklnUrsPEEpxGAaO",
      name: "Hernan Cosin",
      community: "https://apx.school/",
      category: "Development",
      image:
        "https://res.cloudinary.com/drjnku02p/image/upload/v1670941985/ujonghtgvhpcuaiwidsk.jpg",
      description: "Hola",
      email: "hcosin@gmail.com",
    },
  ];

  // const mentors = useMentors()

  return (
    <>
      <ToastContainer />
      <Layout>
        <ViewHeight>
          <Title className={css["hero-title"]} textAlign="center">
            Mentees
          </Title>
          <Large className={css["hero-text"]} margin="0 auto 50px auto;">
            En mentees somos un grupo que busca formar una comunidad con
            personas que quieran compartir conocimientos. Si queres formar parte
            podes registrarte como mentor completando el formulario de
            inscripcion. Si lo que buscas es ayuda podes ponerte en contacto con
            alguno de nuestros mentores.
          </Large>
          <Title className={css["hero-title"]} textAlign="center">
            Mentores
          </Title>
          <CardsContainer>
            {mentors.length !== 0
              ? mentors.map((m: any) => {
                  return (
                    <MentorCard
                      key={m.id}
                      name={m.name}
                      fieldOfExpertise={m.category}
                      description={m.description}
                      imgUrl={m.image}
                      community={m.community}
                    />
                  );
                })
              : null}
          </CardsContainer>
        </ViewHeight>
      </Layout>
    </>
  );
}
