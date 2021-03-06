import React from "react";
import {Link} from "gatsby";
import simple from "react-simple";

import {ParachutePlain} from "./Parachute";
import BrowserTitle from "./BrowserTitle";
import Cloud from "./Cloud";

import {View} from "./core";
import {Dropzones} from "../../DropzoneData";

const ParachuteContainer = simple(View, {
    position: "fixed",
    height: 250,
    top: 0,
    left: 0,
    right: 0,
});

const LinkText = simple(View, {
    textAlign: "center",
    color: "skyblue",
    fontSize: 40,
});

const Title = simple(View, {
    fontSize: 45,
    fontWeight: "bold",
    alignItems: "center",
    color: "white",
});

const Center = simple(View, {
    alignItems: "center",
    flexWrap: "wrap",
    margin: "0 auto",
    maxWidth: 600,
});

const LinkListWrap = simple(View, {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
});

const Sep = simple(View, {
    width: 60,
    height: 60,
});

const DZLinkStyled = simple(View.create(Link), {
    height: 200,
    width: 200,
    marginLeft: 10,
    marginRight: 10,
    textDecoration: "none",
});

const DZLink = ({dz, children}) => (
    <DZLinkStyled to={"/dz/" + dz}>
        <Cloud>
            <LinkText>{children}</LinkText>
        </Cloud>
    </DZLinkStyled>
);

const FrontPage = () => (
    <Center>
        <BrowserTitle full title="Hyppykeli.fi" />
        <ParachuteContainer>
            <ParachutePlain />
        </ParachuteContainer>

        <Sep />
        <Sep />

        <Title>Hyppykeli.fi</Title>

        <Sep />

        <LinkListWrap>
            {Object.keys(Dropzones).map(dz => (
                <DZLink key={dz} dz={dz}>
                    {dz}
                </DZLink>
            ))}
        </LinkListWrap>
    </Center>
);

export default FrontPage;
