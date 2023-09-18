import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

import { OGImage } from "components/OG";
import { Script } from "gatsby";

const Inscription = () => (
  <Layout theme="ces">
    <OGImage path="/images/ces/social.jpg" />
    <Seo title="Inscription" />
    <Heading as="h1" mb={8}>
      Inscription
    </Heading>

    <Box mb={5}>
      <Text>
        <strong>L'accès reste gratuit mais l'inscription obligatoire</strong>.
        Si vous aimez cette journée et souhaitez soutenir l'association,
        n'hésitez pas à{" "}
        <strong>indiquer le montant auquel vous désirez participer</strong> lors
        de votre commande.
      </Text>
      <Text textAlign="right" mt={5}>
        <i>L'équipe Codeurs en Seine</i>
      </Text>
    </Box>

  <a title="Tropevent.com" target="_tropevent" class="tropevent-embedded" 
      href="https://www.tropevent.com/event/Codeurs-en-Seine-2023" 
      data-src="https://www.tropevent.com/event/Codeurs-en-Seine-2023/booking-embedded">Réservation avec tropevent.com 
  </a>
  <Script type="text/javascript" src="https://www.tropevent.com/wro/widget.js"/>


  </Layout>
);

export default Inscription;
