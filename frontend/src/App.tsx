import React from 'react';
import { DAppKitProvider } from "@vechain/dapp-kit-react";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import {
  Dropzone,
  Footer,
  InfoCard,
  Instructions,
  Navbar,
  SubmissionModal,
  PostMomentForm // Ensure this import is correct, adjust the path as needed
} from "./components";
import { lightTheme } from "./theme";
import { VITE_RECAPTCHA_V3_SITE_KEY } from "./env";

const App: React.FC = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={VITE_RECAPTCHA_V3_SITE_KEY}>
      <ChakraProvider theme={lightTheme}>
        <DAppKitProvider
          usePersistence
          requireCertificate={false}
          genesis="test"
          nodeUrl="https://testnet.vechain.org/"
          logLevel={"DEBUG"}
        >
          <Navbar />
          <Flex flex={1}>
            <Container
              mt={{ base: 4, md: 10 }}
              maxW={"container.xl"}
              mb={{ base: 4, md: 10 }}
              display={"flex"}
              flex={1}
              alignItems={"center"}
              justifyContent={"flex-start"}
              flexDirection={"column"}
            >
              <InfoCard />
              <Instructions />
              <Dropzone />
              <PostMomentForm /> {/* Add your form here */}
            </Container>
          </Flex>
          <Footer />

          {/* MODALS  */}
          <SubmissionModal />
        </DAppKitProvider>
      </ChakraProvider>
    </GoogleReCaptchaProvider>
  );
};

export default App;
