import React from 'react';
import BaseRender from './_baseLayout'
// import TestimonialsCarrousel from '../components/Testimonials';

//new components
import Icon from '../new_components/Icon'
import {Colors} from '../new_components/Styling'
import ReactPlayer from '../new_components/ReactPlayer'
import OurPartners from '../new_components/OurPartners'
import IconsBanner from '../new_components/IconsBanner'
import { Div, Grid, HR } from '../new_components/Sections'
import {H1, H2, H3, Paragraph} from '../new_components/Heading'
import {Button, RoundImage} from '../new_components/Styling'
import {StyledBackgroundSection} from '../new_components/Styling'

// function splitTitleString (string) {
//   let stringObj = {
//     first: "",
//     remainingString: ""
//   }
//   let firstLetter = "";
//   let remainingString = ""
//   for (let i = 0; i < string.length; i++) {
//     if (i != 0) {remainingString += string[i]}
//     else {firstLetter = string[i]}
//   }
//   stringObj["first"] = firstLetter
//   stringObj["remainingString"] = remainingString
//   return stringObj
// }

const GeekPal = (props) => {
  const {data, pageContext, yml} = props;
  const partnersData = data.allPartnerYaml.edges[0].node;
  const content = data.allPageYaml.edges[0].node
  console.log(content.icons)
  return (
    <Div margin="0" margin_md="0 0 110px 0" flexDirection="column">
      <Div
        margin="70px 10px"
        margin_md="100px 0"
        margin_tablet="100px"
        border="bottom"
        height="auto"
        flexDirection="column"
        flexDirection_md="row"
      >
        <Div size="12" size_md="6" padding_lg="0 0 0 13.2%" placeItems_md="initial" placeItems="center" padding_md="0 0 0 8%"  justifyContent_md="left" display="flex" flexDirection="column">
          <RoundImage
            url={yml.image_logo}
            bsize="contain"
            position="center center"
            width="220px"
            height="74px"
          />
          <Paragraph fontSize="25px" lineHeight="38px" fontWeight="300" textAlign="inherit" padding="40px 10px" textAlign="center" textAlign_md="left" padding_md="30px 35px 0 0"
            dangerouslySetInnerHTML={{__html: yml.sub_heading}}
          />
        </Div>

        <Div display="flex" flexDirection="column" size="12" size_md="6" justifyContent_md="end" justifyContent="center"
            displayAfter="none" displayAfter_md="block" contentAfter="''" marginLeftAfter="auto" widthAfter="80%" heightAfter="10px" backgroundColorAfter="#CD0000">
               
          <Div width="auto" width_md="100%" padding="30px 0 0 0" padding_tablet="0" height="217px" height_sm="350px" height_tablet="417px" borderRadius="3px" justifyContent="center" alignItems="center" background={Colors.verylightGray}>
            {yml.geekPal.map(item => {
              return (
                <>
                  {item.videoId === "" ?
                    <StyledBackgroundSection
                        height={`350px`}
                        width={`85%`}
                        borderRadius={`3px`}
                        image={item.image.childImageSharp.fluid}
                        bgSize={`contain`}
                        alt="geekforce image"
                    />
                    :
                    <ReactPlayer
                        id={item.videoId}
                        thumb={item.image}
                        imageSize="maxresdefault"
                        style={{
                            width: "85%",
                            height: "350px",
                        }}
                    />
                  }
                </>
                )
              })}
            </Div>
        </Div >
      </Div>

      <Grid background={Colors.lightYellow} columns="2" rows="2" columns_md="12" rows_md="1" alignItems="center" margin="0 0 58px 0" height="470px" height_md="320px" width="auto" margin_md="0 0 78px 0">
        {Array.isArray(content.icons) && content.icons?.map((item, i) => {
          return(
            <IconsBanner icon={item.icon} index={i} title={item.title}  />
            )
        })}
      </Grid>

      {Array.isArray(content.list) && content.list.map((m, i) => {
        return (
          <>
          {
            m.position === "right" ? (
              <Grid direction="rtl" columns_md="2" gridGap_md="50px" padding="50px 0">
                <Div style={{position: "relative"}} height="215px" height_sm="400px" height_tablet="468px" padding="0 38px 30px 25px">
                    <Div display="none" display_md="flex" style={{position: "absolute", background: "#F5F5F5", width: "101%", height: "282px", top: "0", left: "0", borderRadius: "3px"}}></Div>
                    <Div display="none" display_md="flex" style={{position: "absolute", background: "#FFB718", width: "256px", height: "256px", bottom: "18px", right: "18px", borderRadius: "3px"}}></Div>
                    <StyledBackgroundSection
                      className={`image`}
                      height={`100%`}
                      image={m.image.childImageSharp.fluid}
                      bgSize={`contain`}
                      alt="Cnn Logo"
                      borderRadius={`0 0 0 3px`}
                    />
                  </Div>
                  <Div justifyContent="center" flexDirection="column" padding="0 5%" padding_sm="0 20%" padding_md="0 0 0 35%" >
                    <Div direction="ltr" flexDirection="column" margin="0 0 30px 0">
                      <H2 key={i} type="h2" padding="20px 0" lineHeight="36px" textAlign="center" textAlign_tablet="left" margin="0" fontWeight="900" fontSize="30px">{m.title}</H2>
                      {
                        m.sub ? (
                          <>
                            {
                              m.sub?.map(sub => {
                                return (
                                  <>
                                    <H3 type="h3" padding="10px 0px" textAlign="left" margin="0" fontWeight="900" textTransform="uppercase" fontSize="15px">{sub?.title}</H3>
                                    <Paragraph
                                      letterSpacing="0.05em"
                                      textAlign="left"
                                      margin="0 0 20px 0"
                                      fontSize="15px"
                                      lineHeight="26px"
                                      dangerouslySetInnerHTML={{__html: sub?.text}}
                                    />
                                  </>
                                )
                              })
                            }
                          </>
                          ) : (
                          <>
                            <Paragraph
                              letterSpacing="0.05em"
                              fontSize="15px"
                              textAlign="left"
                              margin="0 0 20px 0"
                              lineHeight="22px"
                              dangerouslySetInnerHTML={{__html: m?.text}}
                            />
                          </>
                          )
                      }
                    </Div>
                  </Div>
                </Grid>
              ) : (
                <Grid columns_md="2" gridGap_md="50px" padding="50px 0">
                  <Div style={{position: "relative"}} height="215px" height_sm="400px" height_tablet="468px" padding="0 38px 30px 25px">
                    <Div display="none" display_md="flex" style={{position: "absolute", background: "#F5F5F5", width: "101%", height: "282px", top: "0", left: "0", borderRadius: "3px"}}></Div>
                    <Div display="none" display_md="flex" style={{position: "absolute", background: "#0097CD", width: "256px", height: "256px", bottom: "18px", right: "18px", borderRadius: "3px"}}></Div>
                    <StyledBackgroundSection
                      className={`image`}
                      height={`100%`}
                      image={m.image.childImageSharp.fluid}
                      bgSize={`contain`}
                      alt="Cnn Logo"
                      borderRadius={`0 0 0 3px`}
                    />
                  </Div>
                  <Div justifyContent="center" flexDirection="column" padding="0 5%" padding_sm="0 20%" padding_md="0 35% 0 0">
                    <Div flexDirection="column" margin="0 0 30px 0">
                      <H2 key={i} type="h2" padding="20px 0" lineHeight="36px" textAlign="center" textAlign_tablet="left"  margin="0" fontWeight="900" fontSize="30px">{m.title}</H2>
                      {
                        m.sub ? (
                          <>
                            {
                              m.sub?.map(sub => {
                                return (
                                  <>
                                    <H3 type="h3" padding="10px 0px" textAlign="left" margin="0" fontWeight="900" textTransform="uppercase" fontSize="15px">{sub?.title}</H3>
                                    <Paragraph
                                      letterSpacing="0.05em"
                                      textAlign="left"
                                      margin="0 0 20px 0"
                                      fontSize="15px"
                                      lineHeight="26px"
                                      dangerouslySetInnerHTML={{__html: sub?.text}}
                                    />
                                  </>
                                )
                              })
                            }
                          </>
                          ) : (
                          <>
                            <Paragraph
                              letterSpacing="0.05em"
                              fontSize="15px"
                              textAlign="left"
                              margin="0 0 20px 0"
                              lineHeight="22px"
                              dangerouslySetInnerHTML={{__html: m?.text}}
                            />
                          </>
                          )
                      }
                    </Div>
                  </Div>
                </Grid>
              )
            }
            </>
          )
        })}
      <HR background={Colors.verylightGray} margin="70px 0"/>

        <OurPartners
          images={partnersData.partners.images}
          title={partnersData.partners.tagline}
          paragraph={partnersData.partners.sub_heading}
          showFeatured={false}
          props={partnersData.partners}
          />

    </Div>
  )
};
export const query = graphql`
  query GeekPalQuery($file_name: String!, $lang: String!) {
    allPageYaml(filter: { fields: { file_name: { eq: $file_name }, lang: { eq: $lang }}}) {
      edges{
        node{
          meta_info{
              title
              description
              image
              keywords
              slug
          }
          tagline
          sub_heading
          list {
            title
            text
            sub {
              title
              text
            }
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            position
          }
          image_logo
          icons {
            icon
            title
          }
          geekPal {
            videoId
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        } 
      }
    }
    allTestimonialsYaml(filter: { fields: { lang: { eq: $lang }}}) {
      edges {
        node {
          testimonials {
            student_name
            testimonial_date
            hidden
            linkedin_url
            linkedin_text
            student_thumb{
              childImageSharp {
                fluid(maxWidth: 200){
                  ...GatsbyImageSharpFluid_withWebp
                }
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            content
            source_url
            source_url_text
          }
        }
      }
    }
    allPartnerYaml(filter: { fields: { lang: { eq: $lang }}}) {
      edges {
        node {
          partners {
            images {
              name
              image {
                childImageSharp {
                  fluid(maxWidth: 150){
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              featured
            }
            tagline
            sub_heading
            footer_button
            footer_link
          }
        }
      }
    }
  }
`;
export default BaseRender(GeekPal);