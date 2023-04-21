import { HomeContainer } from "../../components/homeContainer/HomeContainer";

const Home = (props) => {
  return (
    <div class="w-[100vw]">
      <HomeContainer
        programInfo={props.programInfo}
        registrationInfo={props.registrationInfo}
        teachersInfo={props.teachersInfo}
        newsInfo={props.newsInfo}
        publicationsInfo={props.publicationsInfo}
      />
    </div>
  );
};

export { Home };
