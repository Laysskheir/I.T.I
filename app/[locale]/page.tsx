import { unstable_setRequestLocale } from "next-intl/server";
import StartPage from "@/components/pages/StartPage";

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <StartPage />
    </div>
  );
};

export default Home;
