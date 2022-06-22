import React from "react";

import {
  Column,
  Stack,
  Row,
  Image,
  Text,
  Line,
  PagerIndicator,
  TextArea,
  List,
} from "components";

const MetaversewebsitePage = () => {
  return (
    <>
      <Column className="bg-black_900 font-poppins items-start justify-start mx-[auto] pb-[109px] 3xl:pb-[130px] lg:pb-[84px] xl:pb-[96px] w-[100%]">
        <Column className="w-[100%]">
          <Stack className="lg:h-[1765px] xl:h-[2019px] h-[2269px] 2xl:h-[2271px] 3xl:h-[2725px] w-[100%]">
            <Stack className="absolute lg:h-[1765px] xl:h-[2019px] h-[2269px] 2xl:h-[2271px] 3xl:h-[2725px] inset-[0] w-[100%]">
              <Row className="absolute items-start justify-between top-[0] w-[100%]">
                <Stack className="lg:h-[1119px] xl:h-[1280px] h-[1438.11px] 2xl:h-[1440px] 3xl:h-[1727px] lg:mt-[49px] xl:mt-[56px] mt-[63px] 3xl:mt-[75px] w-[41%]">
                  <Image
                    src={"images/img_group83.png"}
                    className="absolute lg:h-[530px] xl:h-[606px] h-[681.01px] 2xl:h-[682px] 3xl:h-[818px] left-[0] object-contain opacity-op1 top-[11%] w-[61%]"
                    alt="Group83"
                  />
                  <Column className="absolute items-start justify-start right-[0] top-[0] w-[83%]">
                    <Column className="font-roboto w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-semibold outline outline-[1px] outline-white_A700 lg:text-[20px] xl:text-[23px] text-[26px] 3xl:text-[31px] text-left text-white_A700 w-[auto]">
                          <span className="text-white_A700 font-roboto">
                            <>{`BrB`}</>
                          </span>
                          <span className="text-white_A700 font-roboto">
                            <>{`Verse`}</>
                          </span>
                        </Text>
                        <Image
                          src={"images/img_market.svg"}
                          className="lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:ml-[251px] xl:ml-[287px] ml-[323px] 3xl:ml-[387px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain w-[12%]"
                          alt="Market"
                        />
                      </Row>
                    </Column>
                    <Text className="font-aclonica font-normal lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[196px] xl:mt-[224px] mt-[252px] 3xl:mt-[302px] not-italic lg:text-[107px] xl:text-[123px] text-[138.5826873779297px] 2xl:text-[138px] 3xl:text-[166px] text-left text-white_A700 w-[auto]">{`BRB`}</Text>
                    <Text className="font-normal font-poppins lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] lg:mt-[234px] xl:mt-[268px] mt-[302px] 3xl:mt-[362px] not-italic lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-left text-white_A700 w-[auto]">{`aQuaBrB ⚡`}</Text>
                  </Column>
                  <Image
                    src={"images/img_pexelscapture.png"}
                    className="absolute bottom-[0] lg:h-[521px] xl:h-[596px] h-[669.11px] 2xl:h-[670px] 3xl:h-[804px] object-contain right-[1%] w-[81%]"
                    alt="pexelscapture"
                  />
                </Stack>
                <Image
                  src={"images/img_topology1.png"}
                  className="3xl:h-[1128px] lg:h-[731px] xl:h-[836px] h-[939.22px] 2xl:h-[940px] lg:mb-[437px] xl:mb-[499px] mb-[561.89px] 2xl:mb-[562px] 3xl:mb-[674px] xl:ml-[103px] ml-[116px] 3xl:ml-[139px] lg:ml-[90px] object-contain opacity-op5 w-[51%]"
                  alt="Topology1"
                />
              </Row>
              <Stack className="absolute bottom-[9%] h-[1069.49px] 2xl:h-[1071px] 3xl:h-[1285px] lg:h-[832px] xl:h-[952px] left-[0] w-[38%]">
                <Image
                  src={"images/img_loopergroup.svg"}
                  className="absolute bottom-[0] lg:h-[613px] xl:h-[701px] h-[787.49px] 2xl:h-[789px] 3xl:h-[946px] left-[0] object-contain opacity-op5 w-[95%]"
                  alt="LooperGroup"
                />
                <Image
                  src={"images/img_group20.svg"}
                  className="absolute lg:h-[313px] xl:h-[358px] h-[402px] 2xl:h-[403px] 3xl:h-[483px] object-contain opacity-op1 right-[0] top-[0] lg:w-[312px] xl:w-[357px] w-[402px] 3xl:w-[482px]"
                  alt="Group20"
                />
              </Stack>
              <Image
                src={"images/img_discover.svg"}
                className="absolute lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] left-[45%] object-contain top-[3%] w-[5%]"
                alt="Discover"
              />
              <Line className="absolute h-[3px] top-[38%] w-[100%]" />
              <Text className="absolute font-medium left-[42%] opacity-op8 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-left text-white_A700 top-[43%] uppercase w-[auto]">{`Hermes`}</Text>
              <Row className="absolute bottom-[5%] inset-x-[0] items-center justify-start mx-[auto] w-[75%]">
                <Column className="bg-gradient  lg:my-[28px] xl:my-[32px] my-[37px] 3xl:my-[44px] lg:pb-[24px] xl:pb-[27px] pb-[31.12px] 2xl:pb-[31px] 3xl:pb-[37px] lg:pt-[13px] xl:pt-[14px] pt-[16.82px] 2xl:pt-[16px] 3xl:pt-[20px] rounded-radius1682 w-[30%]">
                  <Column className="items-center pl-[17.67px] pr-[17.66px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[21px] w-[100%]">
                    <Stack className="lg:h-[224px] xl:h-[256px] h-[287.69006px] 2xl:h-[288px] 3xl:h-[346px] mx-[auto] w-[89%]">
                      <Image
                        src={"images/img_rectangle7.png"}
                        className="absolute lg:h-[224px] xl:h-[256px] h-[287.69px] 2xl:h-[288px] 3xl:h-[346px] inset-[0] justify-center m-[auto] object-contain rounded-radius1682 w-[100%]"
                        alt="Rectangle7"
                      />
                      <Row className="absolute bg-bluegray_100_35 bottom-[7%] inset-x-[0] items-center justify-between mx-[auto] pb-[12.02px] 2xl:pb-[12px] xl:pl-[18px] pl-[21.03px] xl:pr-[19px] pr-[21.38px] pt-[11.77px] 2xl:pt-[11px] lg:px-[16px] 2xl:px-[21px] 3xl:px-[25px] xl:py-[10px] 3xl:py-[14px] lg:py-[9px] rounded-radius1262 w-[86%]">
                        <Column className="items-start mb-[1px] mt-[0] w-[27%]">
                          <Text className="font-medium opacity-op51 xl:text-[10px] text-[11.776823997497559px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[9px] text-left text-white_A700 w-[auto]">{`Current Bid`}</Text>
                          <Text className="font-semibold lg:text-[10px] xl:text-[11px] text-[13.459227561950684px] 2xl:text-[13px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`0.34 BNB`}</Text>
                        </Column>
                        <Column className="items-start lg:ml-[63px] xl:ml-[72px] ml-[81.9px] 2xl:ml-[81px] 3xl:ml-[98px] my-[0] w-[23%]">
                          <Text className="font-medium opacity-op51 xl:text-[10px] text-[11.776823997497559px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[9px] text-left text-white_A700 w-[auto]">{`Ends In`}</Text>
                          <Text className="font-semibold lg:text-[10px] xl:text-[11px] text-[13.459227561950684px] 2xl:text-[13px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">
                            <span className="text-white_A700 text-[13.46px] font-poppins lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                              <>{`12`}</>
                            </span>
                            <span className="text-white_A700 text-[16.824033737182617px] font-poppins lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px]">
                              <>{`:`}</>
                            </span>
                            <span className="text-white_A700 text-[13.46px] font-poppins lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                              <>{`35`}</>
                            </span>
                            <span className="text-white_A700 text-[16.824033737182617px] font-poppins lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px]">
                              <>{`:`}</>
                            </span>
                            <span className="text-white_A700 text-[13.46px] font-poppins lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                              <>{`40`}</>
                            </span>
                          </Text>
                        </Column>
                      </Row>
                    </Stack>
                  </Column>
                  <Column className="items-end lg:mt-[23px] xl:mt-[26px] mt-[30.29px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pl-[30px] xl:pl-[35px] pl-[39.54px] 2xl:pl-[39px] 3xl:pl-[47px] lg:pr-[19px] xl:pr-[22px] pr-[25.5px] 2xl:pr-[25px] 3xl:pr-[30px] w-[100%]">
                    <Row className="items-start justify-end w-[80%]">
                      <Text className="font-medium my-[1px] lg:text-[13px] xl:text-[14px] text-[16.824033737182617px] 2xl:text-[16px] 3xl:text-[20px] text-left text-white_A700 w-[auto]">{`Blue Aqua King`}</Text>
                      <Image
                        src={"images/img_ellipse61.png"}
                        className="lg:h-[21px] xl:h-[24px] h-[26.08px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[39px] xl:ml-[45px] ml-[51.17px] 2xl:ml-[51px] 3xl:ml-[61px] object-contain rounded-radius50 w-[auto]"
                        alt="Ellipse61"
                      />
                      <Image
                        src={"images/img_emile.svg"}
                        className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:mb-[6px] xl:mb-[7px] mb-[8.03px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[4px] ml-[5.89px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] lg:mt-[3px] xl:mt-[4px] mt-[5.05px] 2xl:mt-[5px] 3xl:mt-[6px] object-contain w-[18%]"
                        alt="Emile"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-gray_900 items-center lg:ml-[22px] xl:ml-[25px] ml-[28.82px] 2xl:ml-[28px] 3xl:ml-[34px] lg:pb-[28px] xl:pb-[32px] pb-[37px] 3xl:pb-[44px] lg:pt-[15px] xl:pt-[17px] pt-[20px] 3xl:pt-[24px] lg:px-[16px] xl:px-[18px] px-[21px] 3xl:px-[25px] rounded-radius20 w-[35%]">
                  <Stack className="lg:h-[266px] xl:h-[305px] h-[342px] 2xl:h-[343px] 3xl:h-[411px] mx-[auto] w-[89%]">
                    <Image
                      src={"images/img_rectangle8.png"}
                      className="absolute lg:h-[266px] xl:h-[305px] h-[342px] 2xl:h-[343px] 3xl:h-[411px] inset-[0] object-cover opacity-op9 rounded-radius20 w-[100%]"
                      alt="Rectangle8"
                    />
                    <Row className="absolute bg-bluegray_100_35 bottom-[7%] inset-x-[0] items-center justify-between mx-[auto] lg:px-[19px] xl:px-[22px] px-[25px] 3xl:px-[30px] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius15 w-[86%]">
                      <Column className="items-start xl:mb-[1px] lg:mb-[1px] mb-[2px] w-[27%]">
                        <Text className="font-medium opacity-op51 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Current Bid`}</Text>
                        <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-white_A700 w-[auto]">{`0.34 BNB`}</Text>
                      </Column>
                      <Column className="items-start 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] w-[23%]">
                        <Text className="font-medium opacity-op51 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Ends In`}</Text>
                        <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-white_A700 w-[auto]">
                          <span className="text-white_A700 font-poppins">
                            <>{`12`}</>
                          </span>
                          <span className="text-white_A700 text-[20px] font-poppins lg:text-[15px] xl:text-[17px] 3xl:text-[24px]">
                            <>{`:`}</>
                          </span>
                          <span className="text-white_A700 font-poppins">
                            <>{`35`}</>
                          </span>
                          <span className="text-white_A700 text-[20px] font-poppins lg:text-[15px] xl:text-[17px] 3xl:text-[24px]">
                            <>{`:`}</>
                          </span>
                          <span className="text-white_A700 font-poppins">
                            <>{`40`}</>
                          </span>
                        </Text>
                      </Column>
                    </Row>
                  </Stack>
                  <Row className="items-start justify-start lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] w-[80%]">
                    <Text className="font-medium mt-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-left text-white_A700 w-[auto]">{`Solar Deity Jellyfish`}</Text>
                    <Image
                      src={"images/img_ellipse61_1.png"}
                      className="lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse61"
                    />
                    <Image
                      src={"images/img_emile_1.svg"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] object-contain w-[18%]"
                      alt="Emile"
                    />
                  </Row>
                </Column>
                <Column className="bg-gradient  items-center xl:mb-[33px] mb-[37.22px] 2xl:mb-[37px] lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] xl:mt-[32px] mt-[37px] lg:my-[28px] 3xl:my-[44px] lg:pb-[24px] xl:pb-[27px] pb-[31.11px] 2xl:pb-[31px] 3xl:pb-[37px] pl-[17.66px] pr-[17.65px] lg:pt-[13px] xl:pt-[14px] pt-[16.81px] 2xl:pt-[16px] 3xl:pt-[20px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[21px] rotate-[-180deg] rounded-radius1682 w-[30%]">
                  <Stack className="lg:h-[224px] xl:h-[256px] h-[287.53003px] 2xl:h-[288px] 3xl:h-[346px] mx-[auto] w-[89%]">
                    <Image
                      src={"images/img_rectangle9.png"}
                      className="absolute lg:h-[224px] xl:h-[256px] h-[287.53px] 2xl:h-[288px] 3xl:h-[346px] inset-[0] object-cover opacity-op8 rounded-radius1681 w-[100%]"
                      alt="Rectangle9"
                    />
                    <Row className="absolute bg-bluegray_100_35 bottom-[7%] inset-x-[0] items-center justify-between mx-[auto] pb-[11.99px] pl-[21.02px] pr-[21.34px] pt-[11.77px] lg:px-[16px] xl:px-[18px] 2xl:px-[21px] 3xl:px-[25px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[14px] lg:py-[9px] rounded-radius1261 w-[86%]">
                      <Column className="items-start mb-[1px] mt-[0] w-[27%]">
                        <Text className="font-medium opacity-op51 xl:text-[10px] text-[11.770234107971191px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[9px] text-left text-white_A700 w-[auto]">{`Current Bid`}</Text>
                        <Text className="font-semibold mt-[0] lg:text-[10px] xl:text-[11px] text-[13.451696395874023px] 2xl:text-[13px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`0.34 BNB`}</Text>
                      </Column>
                      <Column className="items-start lg:ml-[63px] xl:ml-[72px] ml-[81.81px] 2xl:ml-[81px] 3xl:ml-[98px] my-[0] w-[23%]">
                        <Text className="font-medium opacity-op51 xl:text-[10px] text-[11.770234107971191px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[9px] text-left text-white_A700 w-[auto]">{`Ends In`}</Text>
                        <Text className="font-semibold lg:text-[10px] xl:text-[11px] text-[13.451696395874023px] 2xl:text-[13px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">
                          <span className="text-white_A700 text-[13.45px] font-poppins lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                            <>{`12`}</>
                          </span>
                          <span className="text-white_A700 text-[16.814620971679688px] font-poppins lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px]">
                            <>{`:`}</>
                          </span>
                          <span className="text-white_A700 text-[13.45px] font-poppins lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                            <>{`35`}</>
                          </span>
                          <span className="text-white_A700 text-[16.814620971679688px] font-poppins lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px]">
                            <>{`:`}</>
                          </span>
                          <span className="text-white_A700 text-[13.45px] font-poppins lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                            <>{`40`}</>
                          </span>
                        </Text>
                      </Column>
                    </Row>
                  </Stack>
                  <Row className="items-start justify-start lg:mt-[23px] xl:mt-[26px] mt-[30.27px] 2xl:mt-[30px] 3xl:mt-[36px] mx-[auto] w-[80%]">
                    <Text className="font-medium my-[1px] lg:text-[13px] xl:text-[14px] text-[16.814620971679688px] 2xl:text-[16px] 3xl:text-[20px] text-left text-white_A700 w-[auto]">{`Burning Fish`}</Text>
                    <Image
                      src={"images/img_ellipse61_2.png"}
                      className="lg:h-[21px] xl:h-[24px] h-[26.06px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[59px] xl:ml-[67px] ml-[76.08px] 2xl:ml-[76px] 3xl:ml-[91px] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse61"
                    />
                    <Image
                      src={"images/img_emile_2.svg"}
                      className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:mb-[6px] xl:mb-[7px] mb-[8.01px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[4px] ml-[5.89px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] lg:mt-[3px] xl:mt-[4px] mt-[5.05px] 2xl:mt-[5px] 3xl:mt-[6px] object-contain w-[18%]"
                      alt="Emile"
                    />
                  </Row>
                </Column>
              </Row>
              <Image
                src={"images/img_group14.svg"}
                className="absolute bottom-[2%] 3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] object-contain right-[0] w-[5%]"
                alt="Group14"
              />
              <Stack className="absolute bottom-[0] lg:h-[129px] xl:h-[148px] h-[165.35px] 2xl:h-[166px] 3xl:h-[199px] right-[0] w-[9%]">
                <PagerIndicator
                  className="absolute h-[8px] inset-y-[0] left-[0] my-[auto] w-[auto]"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-radius50 w-[8px] h-[8px] border-white_A700 border border-solid absolute"
                  activeIndex={undefined}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 w-[8px] h-[8px] bg-white_A700 absolute"
                  sliderRef={undefined}
                  selectedWrapperCss="2xl:mx-[8px] 3xl:mx-[9px] inline-block lg:mx-[6px] mx-[8.00px] xl:mx-[7px]"
                  unselectedWrapperCss="2xl:mx-[8px] 3xl:mx-[9px] inline-block lg:mx-[6px] mx-[8.00px] xl:mx-[7px]"
                />
                <Image
                  src={"images/img_frame49.svg"}
                  className="absolute lg:h-[129px] xl:h-[148px] h-[165.35px] 2xl:h-[166px] 3xl:h-[199px] object-contain right-[0] w-[68%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_1.svg"}
                  className="absolute lg:h-[108px] xl:h-[124px] h-[138.59px] 2xl:h-[139px] 3xl:h-[167px] inset-y-[0] my-[auto] object-contain right-[0] w-[82%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_2.svg"}
                  className="absolute h-[102.39px] 2xl:h-[103px] 3xl:h-[123px] lg:h-[80px] xl:h-[92px] inset-y-[0] my-[auto] object-contain right-[0] w-[93%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_3.svg"}
                  className="absolute lg:h-[47px] xl:h-[53px] h-[59.21px] 2xl:h-[60px] 3xl:h-[72px] inset-[0] justify-center m-[auto] object-contain w-[99%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_4.svg"}
                  className="absolute lg:h-[47px] xl:h-[53px] h-[59.21px] 2xl:h-[60px] 3xl:h-[72px] inset-[0] justify-center m-[auto] object-contain w-[99%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_5.svg"}
                  className="absolute h-[102.39px] 2xl:h-[103px] 3xl:h-[123px] lg:h-[80px] xl:h-[92px] inset-y-[0] my-[auto] object-contain right-[0] w-[93%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_6.svg"}
                  className="absolute lg:h-[108px] xl:h-[124px] h-[138.59px] 2xl:h-[139px] 3xl:h-[167px] inset-y-[0] my-[auto] object-contain right-[0] w-[82%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_7.svg"}
                  className="absolute lg:h-[129px] xl:h-[148px] h-[165.35px] 2xl:h-[166px] 3xl:h-[199px] object-contain right-[0] w-[68%]"
                  alt="Frame49"
                />
              </Stack>
              <Image
                src={"images/img_group13.svg"}
                className="absolute bottom-[1%] lg:h-[106px] xl:h-[121px] h-[136px] 2xl:h-[137px] 3xl:h-[164px] object-contain right-[0] w-[7%]"
                alt="Group13"
              />
              <Stack className="absolute bottom-[0] lg:h-[144px] xl:h-[164px] h-[184px] 2xl:h-[185px] 3xl:h-[221px] right-[0] w-[4%]">
                <Image
                  src={"images/img_frame49_8.svg"}
                  className="absolute lg:h-[141px] xl:h-[161px] h-[180.84px] 2xl:h-[181px] 3xl:h-[218px] inset-x-[0] inset-y-[1%] object-cover w-[100%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_9.svg"}
                  className="absolute lg:h-[144px] xl:h-[164px] h-[184px] 2xl:h-[185px] 3xl:h-[221px] inset-x-[40%] inset-y-[0] object-contain w-[20%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_10.svg"}
                  className="absolute lg:h-[141px] xl:h-[161px] h-[180.84px] 2xl:h-[181px] 3xl:h-[218px] inset-x-[0] inset-y-[1%] object-cover w-[100%]"
                  alt="Frame49"
                />
                <PagerIndicator
                  className="absolute h-[12.42px] left-[0] top-[0] w-[auto]"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-radius50 w-[8px] h-[8px] bg-white_A700 absolute"
                  activeIndex={undefined}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 w-[9.8px] h-[9.8px] bg-white_A700 absolute"
                  sliderRef={undefined}
                  selectedWrapperCss="2xl:mx-[6px] 3xl:mx-[8px] inline-block lg:mx-[5px] mx-[6.90px] xl:mx-[6px]"
                  unselectedWrapperCss="2xl:mx-[6px] 3xl:mx-[8px] inline-block lg:mx-[5px] mx-[6.90px] xl:mx-[6px]"
                />
              </Stack>
            </Stack>
            <Column className="absolute font-alegreyasc h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[1%] w-[92%]">
              <Stack className="lg:h-[533px] xl:h-[610px] h-[685px] 2xl:h-[686px] 3xl:h-[823px] lg:ml-[134px] xl:ml-[153px] ml-[173px] 3xl:ml-[207px] w-[87%]">
                <Stack className="absolute lg:h-[533px] xl:h-[610px] h-[685px] 2xl:h-[686px] 3xl:h-[823px] inset-[0] w-[100%]">
                  <Row className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[0] w-[83%]">
                    <Stack className="lg:h-[467px] xl:h-[534px] h-[600px] 2xl:h-[601px] 3xl:h-[721px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[20%]">
                      <div className="absolute bg-gradient1  bottom-[0] lg:p-[2px] mb-[0] mr-[0] p-[3px] right-[0] w-[auto] xl:p-[2px] ">
                        <Text className="absolute bg-black_900 font-black outline lg:text-[224px] xl:text-[256px] text-[288.0952453613281px] 2xl:text-[288px] 3xl:text-[345px] text-left">{`1`}</Text>
                      </div>
                      <Image
                        src={"images/img_jizimingv9oawp.png"}
                        className="absolute lg:h-[209px] xl:h-[239px] h-[268px] 2xl:h-[269px] 3xl:h-[322px] left-[0] object-contain opacity-op3 top-[0] w-[80%]"
                        alt="jizimingv9oawP"
                      />
                    </Stack>
                    <Image
                      src={"images/img_community.svg"}
                      className="lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] lg:mb-[471px] xl:mb-[539px] mb-[606px] 3xl:mb-[727px] lg:ml-[162px] xl:ml-[185px] ml-[209px] 3xl:ml-[250px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] object-contain w-[8%]"
                      alt="Community"
                    />
                    <Image
                      src={"images/img_wallet.svg"}
                      className="lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] lg:mb-[471px] xl:mb-[539px] mb-[606px] 3xl:mb-[727px] lg:ml-[60px] xl:ml-[69px] ml-[78px] 3xl:ml-[93px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] object-contain w-[6%]"
                      alt="Wallet"
                    />
                    <Image
                      src={"images/img_group3.svg"}
                      className="lg:h-[33px] xl:h-[38px] h-[42px] 2xl:h-[43px] 3xl:h-[51px] lg:mb-[462px] xl:mb-[528px] mb-[594px] 3xl:mb-[713px] lg:ml-[39px] xl:ml-[45px] ml-[51px] 3xl:ml-[61px] object-contain w-[15%]"
                      alt="Group3"
                    />
                    <Image
                      src={"images/img_group1.png"}
                      className="lg:h-[33px] xl:h-[38px] h-[42px] 2xl:h-[43px] 3xl:h-[51px] lg:mb-[462px] xl:mb-[528px] mb-[594px] 3xl:mb-[713px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain w-[14%]"
                      alt="Group1"
                    />
                  </Row>
                  <Stack className="absolute bottom-[0] lg:h-[152px] xl:h-[174px] h-[195px] 2xl:h-[196px] 3xl:h-[235px] w-[100%]">
                    <Text className="absolute font-black left-[0] outline outline-[1.43px] outline-white_A700 lg:text-[111px] xl:text-[127px] text-[143.3070831298828px] 2xl:text-[143px] 3xl:text-[172px] text-left w-[auto]">{`Verse`}</Text>
                    <Line className="absolute h-[3px] right-[0] top-[12%] w-[69%]" />
                  </Stack>
                </Stack>
                <Column className="absolute bottom-[9%] items-start justify-start right-[13%] w-[46%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <div className="bg-transparent border-0 w-[81%] input-wrap">
                        <Image
                          src={"images/img_group50.png"}
                          className="absolute z-[1] right-[10px] bg-transparent border-0 lg:right-[7px] xl:right-[8px] 3xl:right-[12px] my-[auto] inset-y-[0]"
                          alt="Group50"
                        />
                        <TextArea
                          className="placeholder:bg-transparent bg-transparent border-0 xl:pr-[106px] pr-[120px] 3xl:pr-[144px] lg:pr-[93px] w-[100%]"
                          name="Group153"
                          placeholder={""}
                        ></TextArea>
                      </div>
                      <Image
                        src={"images/img_group5.svg"}
                        className="xl:h-[102px] h-[114px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] lg:mb-[35px] xl:mb-[40px] mb-[45px] 3xl:mb-[54px] 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] object-contain w-[3%]"
                        alt="Group5"
                      />
                    </Row>
                  </Column>
                  <Image
                    src={"images/img_group4.png"}
                    className="lg:h-[33px] xl:h-[38px] h-[42px] 2xl:h-[43px] 3xl:h-[51px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] object-contain w-[34%]"
                    alt="Group4"
                  />
                  <Column className="lg:mt-[60px] xl:mt-[69px] mt-[78px] 3xl:mt-[93px] w-[100%]">
                    <Row className="items-center justify-between lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:pr-[40px] xl:pr-[46px] pr-[52px] 3xl:pr-[62px] w-[100%]">
                      <Column className="items-start w-[18%]">
                        <Text className="font-circularstd font-medium opacity-op7 lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-deep_purple_600 text-left w-[auto]">
                          <span className="text-deep_purple_600 font-alegreyasans font-bold">
                            <>{`70`}</>
                          </span>
                          <span className="text-deep_purple_600 text-[42px] font-alegreyasans font-bold lg:text-[32px] xl:text-[37px] 3xl:text-[50px]">
                            <>{`K`}</>
                          </span>
                          <span className="text-deep_purple_600 font-alegreyasans font-bold">
                            <>{`+`}</>
                          </span>
                        </Text>
                        <Text className="font-light font-poppins opacity-op7 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-left text-white_A700 w-[auto]">{`Artwork`}</Text>
                      </Column>
                      <Column className="items-start 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] w-[21%]">
                        <Text className="font-circularstd font-medium opacity-op7 lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-deep_purple_600 text-left w-[auto]">
                          <span className="text-deep_purple_600 text-[45px] font-alegreyasans font-bold lg:text-[35px] xl:text-[40px] 3xl:text-[54px]">
                            <>{`160`}</>
                          </span>
                          <span className="text-deep_purple_600 text-[42px] font-alegreyasans font-bold lg:text-[32px] xl:text-[37px] 3xl:text-[50px]">
                            <>{`K`}</>
                          </span>
                          <span className="text-deep_purple_600 font-alegreyasans font-bold">
                            <>{`+`}</>
                          </span>
                        </Text>
                        <Text className="font-light font-poppins opacity-op7 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-left text-white_A700 w-[auto]">{`Auction`}</Text>
                      </Column>
                      <Column className="items-start 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] w-[16%]">
                        <Text className="font-circularstd font-medium opacity-op7 lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-deep_purple_600 text-left w-[auto]">
                          <span className="text-deep_purple_600 text-[46px] font-alegreyasans font-bold lg:text-[35px] xl:text-[40px] 3xl:text-[55px]">
                            <>{`12`}</>
                          </span>
                          <span className="text-deep_purple_600 text-[42px] font-alegreyasans font-bold lg:text-[32px] xl:text-[37px] 3xl:text-[50px]">
                            <>{`K`}</>
                          </span>
                          <span className="text-deep_purple_600 font-alegreyasans font-bold">
                            <>{`+`}</>
                          </span>
                        </Text>
                        <Text className="font-light font-poppins opacity-op7 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-left text-white_A700 w-[auto]">{`Artist`}</Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Column className="font-poppins lg:mt-[54px] xl:mt-[62px] mt-[70px] 3xl:mt-[84px] w-[100%]">
                <Column className="items-start justify-start w-[100%]">
                  <Column className="items-end lg:pl-[392px] xl:pl-[448px] pl-[504px] 3xl:pl-[605px] pr-[103px] 3xl:pr-[123px] lg:pr-[80px] xl:pr-[91px] w-[100%]">
                    <Row className="items-center justify-end w-[10%]">
                      <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`View more`}</Text>
                      <Image
                        src={"images/img_arrowrightlon.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Arrowrightlon"
                      />
                    </Row>
                    <Stack className="xl:h-[100px] h-[112px] 2xl:h-[113px] 3xl:h-[135px] lg:h-[88px] 3xl:mr-[115px] lg:mr-[74px] xl:mr-[85px] mr-[96px] lg:mt-[260px] xl:mt-[298px] mt-[335px] 3xl:mt-[402px] w-[47%]">
                      <div className="absolute bg-gradient2  left-[0] ml-[0] mt-[0] p-[1px] top-[0] w-[auto] ">
                        <Text className="absolute bg-black_900 font-semibold opacity-op8 outline lg:text-[30px] xl:text-[34px] text-[39.33333206176758px] 2xl:text-[39px] 3xl:text-[47px] text-left uppercase">{`Count down`}</Text>
                      </div>
                      <Row className="absolute bottom-[0] items-center justify-between w-[100%]">
                        <Row className="items-start justify-start w-[15%]">
                          <Text className="font-semibold opacity-op51 lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-bluegray_100 text-left uppercase w-[auto]">{`2`}</Text>
                          <Text className="font-normal lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic opacity-op2 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_100 text-left w-[auto]">{`Days`}</Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] w-[19%]">
                          <Text className="font-semibold opacity-op51 lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-bluegray_100 text-left uppercase w-[auto]">{`12`}</Text>
                          <Text className="font-normal lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic opacity-op2 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_100 text-left w-[auto]">{`Hours`}</Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] w-[25%]">
                          <Text className="font-semibold opacity-op51 lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-bluegray_100 text-left uppercase w-[auto]">{`30`}</Text>
                          <Text className="font-normal lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic opacity-op2 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_100 text-left w-[auto]">{`Minutes`}</Text>
                        </Row>
                        <Row className="items-start justify-start lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] w-[26%]">
                          <Text className="font-semibold opacity-op51 lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-bluegray_100 text-left uppercase w-[auto]">{`54`}</Text>
                          <Text className="font-normal lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic opacity-op2 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_100 text-left w-[auto]">{`Seconds`}</Text>
                        </Row>
                      </Row>
                    </Stack>
                    <Image
                      src={"images/img_group17.png"}
                      className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mr-[152px] xl:mr-[174px] mr-[196px] 3xl:mr-[235px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] object-contain w-[40%]"
                      alt="Group17"
                    />
                  </Column>
                  <Image
                    src={"images/img_group19.svg"}
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[437px] xl:ml-[500px] ml-[563px] 3xl:ml-[675px] mt-[111px] 3xl:mt-[133px] lg:mt-[86px] xl:mt-[98px] object-contain w-[9%]"
                    alt="Group19"
                  />
                  <Column className="lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[100%]">
                    <Row className="items-start justify-end lg:pl-[379px] xl:pl-[434px] pl-[488px] 3xl:pl-[585px] lg:pr-[168px] xl:pr-[192px] pr-[216px] 3xl:pr-[259px] w-[100%]">
                      <Text className="font-medium lg:mb-[41px] xl:mb-[47px] mb-[53px] 3xl:mb-[63px] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-left text-white_A700 w-[auto]">{`Live Auction ⏱️`}</Text>
                      <Image
                        src={"images/img_burstpucker2.png"}
                        className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] lg:ml-[220px] xl:ml-[252px] ml-[284px] 3xl:ml-[340px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] object-contain opacity-op3 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                        alt="Burstpucker2"
                      />
                    </Row>
                    <Row className="xl:gap-[1001px] gap-[1126px] 3xl:gap-[1351px] lg:gap-[875px] grid grid-cols-2 items-center justify-between lg:mt-[169px] xl:mt-[193px] mt-[218px] 3xl:mt-[261px] w-[100%]">
                      <Image
                        src={"images/img_group35.png"}
                        className="lg:h-[45px] xl:h-[51px] h-[57px] 2xl:h-[58px] 3xl:h-[69px] object-contain opacity-op7 lg:w-[44px] xl:w-[50px] w-[57px] 3xl:w-[68px]"
                        alt="Group35"
                      />
                      <Image
                        src={"images/img_group34.png"}
                        className="lg:h-[45px] xl:h-[51px] h-[57px] 2xl:h-[58px] 3xl:h-[69px] object-contain opacity-op7 lg:w-[44px] xl:w-[50px] w-[57px] 3xl:w-[68px]"
                        alt="Group34"
                      />
                    </Row>
                  </Column>
                  <Image
                    src={"images/img_burstpucker2_1.png"}
                    className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] lg:ml-[126px] xl:ml-[144px] ml-[162px] 3xl:ml-[194px] lg:mt-[158px] xl:mt-[181px] mt-[204px] 3xl:mt-[244px] object-contain opacity-op2 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                    alt="Burstpucker2"
                  />
                </Column>
              </Column>
            </Column>
            <Column className="absolute font-poppins inset-x-[0] items-start justify-start mx-[auto] top-[3%] w-[91%]">
              <Stack className="3xl:h-[1044px] lg:h-[676px] xl:h-[774px] h-[869px] 2xl:h-[870px] w-[49%]">
                <Image
                  src={"images/img_kyawtuntp5sz3.png"}
                  className="absolute 3xl:h-[1044px] lg:h-[676px] xl:h-[774px] h-[869px] 2xl:h-[870px] left-[0] object-contain w-[93%]"
                  alt="kyawtuntp5sz3"
                />
                <Image
                  src={"images/img_pexelschevanon.png"}
                  className="absolute lg:h-[285px] xl:h-[326px] h-[366px] 2xl:h-[367px] 3xl:h-[440px] object-contain right-[0] top-[17%] w-[38%]"
                  alt="pexelschevanon"
                />
              </Stack>
              <Column className="items-end xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:pl-[437px] xl:pl-[500px] pl-[563px] 3xl:pl-[675px] w-[100%]">
                <Stack className="lg:h-[157px] xl:h-[179px] h-[201px] 2xl:h-[202px] 3xl:h-[242px] w-[57%]">
                  <Text className="absolute bottom-[0] font-normal leading-[normal] left-[0] not-italic opacity-op6 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[84%]">{`The informal common names given to the medusa-phase of certain gelatinous members of the subphylum Medusozoa, a major part of the phylum Cnidaria. Jellyfish are mainly free-swimming marine animals with umbrella-shaped bells and trailing tentacles`}</Text>
                  <Image
                    src={"images/img_burstpucker1.png"}
                    className="absolute lg:h-[125px] xl:h-[143px] h-[160px] 2xl:h-[161px] 3xl:h-[193px] object-contain right-[0] top-[0] w-[25%]"
                    alt="Burstpucker1"
                  />
                </Stack>
              </Column>
            </Column>
          </Stack>
          <Row className="items-start justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] pl-[100px] 3xl:pl-[120px] lg:pl-[77px] xl:pl-[88px] 3xl:pr-[1086px] lg:pr-[703px] xl:pr-[805px] pr-[905px] w-[100%]">
            <Text className="font-medium lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-left text-white_A700 w-[auto]">
              <span className="text-white_A700 font-poppins">
                <>{`Top`}</>
              </span>
              <span className="text-white_A700_3f font-poppins">
                <>{` contributor`}</>
              </span>
            </Text>
            <Image
              src={"images/img_expandup.svg"}
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
              alt="Expandup"
            />
            <Text className="font-medium lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:ml-[39px] xl:ml-[45px] ml-[51px] 3xl:ml-[61px] lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-left text-white_A700 w-[auto]">
              <span className="text-white_A700 font-poppins">
                <>{`In`}</>
              </span>
              <span className="text-white_A700_3f font-poppins">
                <>{` 1day`}</>
              </span>
            </Text>
            <Image
              src={"images/img_expandup_1.svg"}
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[10px] xl:mb-[12px] mb-[14px] 3xl:mb-[16px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[2%]"
              alt="Expandup"
            />
          </Row>
        </Column>
        <Stack className="lg:h-[321px] xl:h-[367px] h-[412px] 2xl:h-[413px] 3xl:h-[495px] lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] w-[93%]">
          <Stack className="absolute font-alegreyasans lg:h-[321px] xl:h-[367px] h-[412px] 2xl:h-[413px] 3xl:h-[495px] inset-[0] w-[100%]">
            <Image
              src={"images/img_burstcircle2.svg"}
              className="absolute bottom-[0] lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] left-[0] object-contain opacity-op21 w-[15%]"
              alt="Burstcircle2"
            />
            <List
              className="absolute gap-[0] min-h-[auto] right-[0] top-[0] w-[92%]"
              orientation="vertical"
            >
              <Row className="3xl:gap-[111px] lg:gap-[72px] xl:gap-[82px] gap-[93.150024px] 2xl:gap-[93px] grid grid-cols-3 items-center justify-between lg:my-[26px] xl:my-[30px] my-[34.64502px] 2xl:my-[34px] 3xl:my-[41px] pr-[0] w-[100%]">
                <Stack className="3xl:h-[116px] lg:h-[76px] xl:h-[86px] h-[96.56px] 2xl:h-[97px] pb-[1px] w-[100%]">
                  <Stack className="absolute bottom-[0] font-poppins 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] w-[100%]">
                    <div className="absolute bg-gradient3  mr-[0] p-[1px] right-[0] rounded-radius1363 w-[84%] ">
                      <Column className="absolute bg-bluegray_100_fd border-solid h-[max-content] inset-y-[0] items-center justify-center my-[auto] 3xl:pb-[11px] lg:pb-[7px] xl:pb-[8px] pb-[9.35px] 2xl:pb-[9px] lg:pt-[10px] xl:pt-[12px] pt-[13.64px] 2xl:pt-[13px] 3xl:pt-[16px] rounded-radius1363">
                        <Row className="items-center justify-between lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[10px] xl:pr-[11px] pr-[12.93px] 2xl:pr-[12px] 3xl:pr-[15px] w-[100%]">
                          <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Emilie Bulter`}</Text>
                          <Text className="font-medium lg:ml-[39px] xl:ml-[44px] ml-[50.44px] 2xl:ml-[50px] 3xl:ml-[60px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`10.5BNB`}</Text>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[3px] mt-[4.8px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[12px] xl:pr-[14px] pr-[16.46px] 2xl:pr-[16px] 3xl:pr-[19px] w-[100%]">
                          <Text className="font-medium opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`@Emilie`}</Text>
                          <Text className="font-medium lg:ml-[46px] xl:ml-[53px] ml-[59.91px] 2xl:ml-[59px] 3xl:ml-[71px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`$10.535.95`}</Text>
                        </Row>
                      </Column>
                    </div>
                    <Image
                      src={"images/img_ellipse65.png"}
                      className="absolute 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] left-[0] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse65"
                    />
                  </Stack>
                  <Text className="absolute font-alegreyasans font-bold left-[1%] lg:text-[21px] xl:text-[24px] text-[27.26315689086914px] 2xl:text-[27px] 3xl:text-[32px] text-left text-white_A700 top-[0] w-[auto]">{`1`}</Text>
                </Stack>
                <Stack className="3xl:h-[116px] lg:h-[76px] xl:h-[86px] h-[96.56px] 2xl:h-[97px] pb-[1px] pr-[1px] w-[100%]">
                  <Stack className="absolute bottom-[0] font-poppins 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] inset-x-[0] w-[100%]">
                    <div className="absolute bg-gradient3  mr-[0] p-[1px] right-[0] rounded-radius1363 w-[84%] ">
                      <Column className="absolute bg-bluegray_100_fd border-solid h-[max-content] inset-y-[0] items-center justify-center my-[auto] 3xl:pb-[11px] lg:pb-[7px] xl:pb-[8px] pb-[9.35px] 2xl:pb-[9px] lg:pt-[10px] xl:pt-[12px] pt-[13.64px] 2xl:pt-[13px] 3xl:pt-[16px] rounded-radius1363">
                        <Row className="items-center justify-between lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[10px] xl:pr-[11px] pr-[12.92px] 2xl:pr-[12px] 3xl:pr-[15px] w-[100%]">
                          <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Emilie Bulter`}</Text>
                          <Text className="font-medium lg:ml-[39px] xl:ml-[44px] ml-[50.45px] 2xl:ml-[50px] 3xl:ml-[60px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`10.5BNB`}</Text>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[3px] mt-[4.8px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[12px] xl:pr-[14px] pr-[16.46px] 2xl:pr-[16px] 3xl:pr-[19px] w-[100%]">
                          <Text className="font-medium opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`@Emilie`}</Text>
                          <Text className="font-medium lg:ml-[46px] xl:ml-[53px] ml-[59.91px] 2xl:ml-[59px] 3xl:ml-[71px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`$10.535.95`}</Text>
                        </Row>
                      </Column>
                    </div>
                    <Image
                      src={"images/img_ellipse65_1.png"}
                      className="absolute 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] left-[0] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse65"
                    />
                  </Stack>
                  <Text className="absolute font-alegreyasans font-bold left-[2%] lg:text-[21px] xl:text-[24px] text-[27.26315689086914px] 2xl:text-[27px] 3xl:text-[32px] text-left text-white_A700 top-[0] w-[auto]">{`2`}</Text>
                </Stack>
                <Stack className="3xl:h-[116px] lg:h-[76px] xl:h-[86px] h-[96.56px] 2xl:h-[97px] pb-[1px] w-[100%]">
                  <Stack className="absolute bottom-[0] font-poppins 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] w-[100%]">
                    <div className="absolute bg-gradient3  mr-[0] p-[1px] right-[0] rounded-radius1363 w-[84%] ">
                      <Column className="absolute bg-bluegray_100_fd border-solid h-[max-content] inset-y-[0] items-center justify-center my-[auto] 3xl:pb-[11px] lg:pb-[7px] xl:pb-[8px] pb-[9.35px] 2xl:pb-[9px] lg:pt-[10px] xl:pt-[12px] pt-[13.64px] 2xl:pt-[13px] 3xl:pt-[16px] rounded-radius1363">
                        <Row className="items-center justify-between lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[22px] xl:pr-[25px] pr-[28.93px] 2xl:pr-[28px] 3xl:pr-[34px] w-[100%]">
                          <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Emilie Bulter`}</Text>
                          <Text className="font-medium lg:ml-[39px] xl:ml-[44px] ml-[50.44px] 2xl:ml-[50px] 3xl:ml-[60px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`10BNB`}</Text>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[3px] mt-[4.8px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[12px] xl:pr-[14px] pr-[16.46px] 2xl:pr-[16px] 3xl:pr-[19px] w-[100%]">
                          <Text className="font-medium opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`@Emilie`}</Text>
                          <Text className="font-medium lg:ml-[46px] xl:ml-[53px] ml-[59.91px] 2xl:ml-[59px] 3xl:ml-[71px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`$10.535.95`}</Text>
                        </Row>
                      </Column>
                    </div>
                    <Image
                      src={"images/img_ellipse65_2.png"}
                      className="absolute 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] left-[0] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse65"
                    />
                  </Stack>
                  <Text className="absolute font-alegreyasans font-bold left-[2%] lg:text-[21px] xl:text-[24px] text-[27.26315689086914px] 2xl:text-[27px] 3xl:text-[32px] text-left text-white_A700 top-[0] w-[auto]">{`3`}</Text>
                </Stack>
              </Row>
              <Row className="items-center justify-between lg:my-[26px] xl:my-[30px] my-[34.64502px] 2xl:my-[34px] 3xl:my-[41px] w-[100%]">
                <Stack className="3xl:h-[112px] lg:h-[73px] xl:h-[83px] h-[93.15px] 2xl:h-[94px] w-[28%]">
                  <Stack className="absolute bottom-[0] 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] inset-x-[0] top-[1%] w-[100%]">
                    <Image
                      src={"images/img_rectangle12.png"}
                      className="absolute lg:h-[64px] xl:h-[73px] h-[81.79px] 2xl:h-[82px] 3xl:h-[99px] inset-y-[0] my-[auto] object-contain right-[0] rounded-radius1363 w-[84%]"
                      alt="Rectangle12"
                    />
                    <Image
                      src={"images/img_ellipse65_3.png"}
                      className="absolute 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] left-[0] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse65"
                    />
                  </Stack>
                  <Column className="absolute bottom-[15%] font-poppins items-center justify-start right-[5%] w-[65%]">
                    <Row className="items-center justify-between lg:pr-[5px] xl:pr-[6px] pr-[7.47px] 2xl:pr-[7px] 3xl:pr-[8px] w-[100%]">
                      <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Emilie Bulter`}</Text>
                      <Text className="font-medium lg:ml-[39px] xl:ml-[44px] ml-[50.44px] 2xl:ml-[50px] 3xl:ml-[60px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`10 BNB`}</Text>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[3px] mt-[4.81px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                      <Text className="font-medium opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`@Emilie`}</Text>
                      <Text className="font-medium lg:ml-[46px] xl:ml-[53px] ml-[59.91px] 2xl:ml-[59px] 3xl:ml-[71px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`$10.535.95`}</Text>
                    </Row>
                  </Column>
                  <Text className="absolute font-bold left-[1%] lg:text-[21px] xl:text-[24px] text-[27.26315689086914px] 2xl:text-[27px] 3xl:text-[32px] text-left text-white_A700 top-[0] w-[auto]">{`4`}</Text>
                </Stack>
                <Stack className="font-poppins 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93.15px] 2xl:ml-[93px] mt-[1px] pr-[1px] w-[28%]">
                  <div className="absolute bg-gradient3  mr-[0] p-[1px] right-[0] rounded-radius1363 w-[84%] ">
                    <Column className="absolute bg-bluegray_100_fd border-solid h-[max-content] inset-y-[0] items-center justify-center my-[auto] 3xl:pb-[11px] lg:pb-[7px] xl:pb-[8px] pb-[9.35px] 2xl:pb-[9px] lg:pt-[10px] xl:pt-[12px] pt-[13.63px] 2xl:pt-[13px] 3xl:pt-[16px] rounded-radius1363">
                      <Row className="items-center justify-between lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[22px] xl:pr-[25px] pr-[28.92px] 2xl:pr-[28px] 3xl:pr-[34px] w-[100%]">
                        <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Emilie Bulter`}</Text>
                        <Text className="font-medium lg:ml-[39px] xl:ml-[44px] ml-[50.45px] 2xl:ml-[50px] 3xl:ml-[60px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`10BNB`}</Text>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[3px] mt-[4.81px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[12px] xl:pr-[14px] pr-[16.46px] 2xl:pr-[16px] 3xl:pr-[19px] w-[100%]">
                        <Text className="font-medium opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`@Emilie`}</Text>
                        <Text className="font-medium lg:ml-[46px] xl:ml-[53px] ml-[59.91px] 2xl:ml-[59px] 3xl:ml-[71px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`$10.535.95`}</Text>
                      </Row>
                    </Column>
                  </div>
                  <Stack className="absolute font-alegreyasans 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] left-[0] 3xl:w-[110px] lg:w-[71px] xl:w-[81px] w-[92.01px] 2xl:w-[92px]">
                    <Image
                      src={"images/img_ellipse65_4.png"}
                      className="absolute 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] inset-[0] object-cover rounded-radius50 w-[auto]"
                      alt="Ellipse65"
                    />
                    <Text className="absolute font-bold left-[6%] lg:text-[21px] xl:text-[24px] text-[27.26315689086914px] 2xl:text-[27px] 3xl:text-[32px] text-left text-white_A700 top-[0] w-[auto]">{`5`}</Text>
                  </Stack>
                </Stack>
                <Stack className="font-poppins 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93.14px] 2xl:ml-[93px] mr-[0] mt-[1px] w-[28%]">
                  <div className="absolute bg-gradient3  mr-[0] p-[1px] right-[0] rounded-radius1363 w-[84%] ">
                    <Column className="absolute bg-bluegray_100_fd border-solid h-[max-content] inset-y-[0] items-center justify-center my-[auto] 3xl:pb-[11px] lg:pb-[7px] xl:pb-[8px] pb-[9.35px] 2xl:pb-[9px] lg:pt-[10px] xl:pt-[12px] pt-[13.63px] 2xl:pt-[13px] 3xl:pt-[16px] rounded-radius1363">
                      <Row className="items-center justify-between lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[10px] xl:pr-[11px] pr-[12.93px] 2xl:pr-[12px] 3xl:pr-[15px] w-[100%]">
                        <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Emilie Bulter`}</Text>
                        <Text className="font-medium lg:ml-[39px] xl:ml-[44px] ml-[50.44px] 2xl:ml-[50px] 3xl:ml-[60px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`10.5BNB`}</Text>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[3px] mt-[4.81px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[12px] xl:pr-[14px] pr-[16.46px] 2xl:pr-[16px] 3xl:pr-[19px] w-[100%]">
                        <Text className="font-medium opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`@Emilie`}</Text>
                        <Text className="font-medium lg:ml-[46px] xl:ml-[53px] ml-[59.91px] 2xl:ml-[59px] 3xl:ml-[71px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`$10.535.95`}</Text>
                      </Row>
                    </Column>
                  </div>
                  <Stack className="absolute font-alegreyasans 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] left-[0] 3xl:w-[110px] lg:w-[71px] xl:w-[81px] w-[92.01px] 2xl:w-[92px]">
                    <Image
                      src={"images/img_ellipse65_5.png"}
                      className="absolute 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] inset-[0] object-cover rounded-radius50 w-[auto]"
                      alt="Ellipse65"
                    />
                    <Text className="absolute font-bold left-[6%] lg:text-[21px] xl:text-[24px] text-[27.26315689086914px] 2xl:text-[27px] 3xl:text-[32px] text-left text-white_A700 top-[0] w-[auto]">{`6`}</Text>
                  </Stack>
                </Stack>
              </Row>
            </List>
          </Stack>
          <Text className="absolute bottom-[11%] font-normal font-poppins not-italic right-[31%] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center text-white_A700 w-[auto]">{`OUR PARTNERS`}</Text>
        </Stack>
        <Column className="items-center lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[100%]">
          <Stack className="lg:h-[179px] xl:h-[204px] h-[229px] 2xl:h-[230px] 3xl:h-[275px] mx-[auto] w-[83%]">
            <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] w-[97%]">
              <Image
                src={"images/img_panteracrypto.png"}
                className="lg:h-[125px] xl:h-[143px] h-[160px] 2xl:h-[161px] 3xl:h-[193px] lg:my-[14px] xl:my-[16px] my-[18px] 3xl:my-[21px] object-contain w-[26%]"
                alt="Panteracrypto"
              />
              <Image
                src={"images/img_earlybirdventu.png"}
                className="lg:h-[125px] xl:h-[143px] h-[160px] 2xl:h-[161px] 3xl:h-[193px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:my-[14px] xl:my-[16px] my-[18px] 3xl:my-[21px] object-contain w-[26%]"
                alt="earlybirdventu"
              />
              <Stack className="lg:h-[153px] xl:h-[175px] h-[196px] 2xl:h-[197px] 3xl:h-[236px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:px-[12px] xl:px-[13px] px-[15.5px] 2xl:px-[15px] 3xl:px-[18px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[20%]">
                <Image
                  src={"images/img_frame55.png"}
                  className="absolute lg:h-[125px] xl:h-[143px] h-[160px] 2xl:h-[161px] 3xl:h-[193px] inset-x-[0] mx-[auto] object-contain top-[0] lg:w-[124px] xl:w-[142px] w-[160px] 3xl:w-[192px]"
                  alt="Frame55"
                />
                <Text className="absolute bottom-[0] font-medium inset-x-[0] mx-[auto] rotate-[-180deg] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[max-content]">{`Decentraland`}</Text>
              </Stack>
              <Column className="items-center lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] my-[9.5px] 2xl:my-[9px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] shadow-bs w-[21%]">
                <Image
                  src={"images/img_group84.svg"}
                  className="xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] mx-[auto] object-contain xl:w-[106px] w-[120px] 3xl:w-[144px] lg:w-[93px]"
                  alt="Group84"
                />
                <Text className="font-medium xl:mt-[3px] lg:mt-[3px] mt-[4px] mx-[auto] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[auto]">{`Binance Smart Chain`}</Text>
              </Column>
            </Row>
            <div className="absolute bg-gradient3  inset-[0] m-[0] p-[1px] rounded-radius1363 w-[100%] ">
              <div className="absolute bg-bluegray_100_fd border-solid lg:h-[179px] xl:h-[204px] h-[229px] 2xl:h-[230px] 3xl:h-[275px] rounded-radius1363"></div>
            </div>
          </Stack>
          <Row className="font-roboto items-end justify-start xl:mt-[104px] mt-[117px] 3xl:mt-[140px] lg:mt-[91px] pl-[100px] 3xl:pl-[120px] lg:pl-[77px] xl:pl-[88px] pr-[103px] 3xl:pr-[123px] lg:pr-[80px] xl:pr-[91px] w-[100%]">
            <Column className="items-start justify-start w-[21%]">
              <Text className="font-semibold outline outline-[1px] outline-white_A700 lg:text-[20px] xl:text-[23px] text-[26px] 3xl:text-[31px] text-left text-white_A700 w-[auto]">
                <span className="text-white_A700 font-roboto">
                  <>{`BRB`}</>
                </span>
                <span className="text-white_A700 font-roboto">
                  <>{`Verse`}</>
                </span>
              </Text>
              <Column className="lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Image
                  src={"images/img_theworldslarg.svg"}
                  className="3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] object-cover opacity-op7 w-[100%]"
                  alt="Theworldslarg"
                />
                <Row className="lg:gap-[23px] xl:gap-[26px] gap-[30px] 3xl:gap-[36px] grid grid-cols-4 items-center justify-start lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[100%]">
                  <Image
                    src={"images/img_metafill1.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="metafill1"
                  />
                  <Image
                    src={"images/img_frame.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Frame"
                  />
                  <Image
                    src={"images/img_frame_1.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Frame"
                  />
                  <Image
                    src={"images/img_frame_2.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Frame"
                  />
                </Row>
              </Column>
            </Column>
            <Image
              src={"images/img_group79.svg"}
              className="lg:h-[137px] xl:h-[156px] h-[175px] 2xl:h-[176px] 3xl:h-[211px] lg:ml-[123px] xl:ml-[141px] ml-[159px] 3xl:ml-[190px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] object-contain w-[8%]"
              alt="Group79"
            />
            <Row className="items-center justify-center lg:ml-[63px] xl:ml-[72px] ml-[82px] 3xl:ml-[98px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[40%]">
              <Image
                src={"images/img_group80.svg"}
                className="lg:h-[137px] xl:h-[156px] h-[175px] 2xl:h-[176px] 3xl:h-[211px] object-contain w-[26%]"
                alt="Group80"
              />
              <Image
                src={"images/img_group81.svg"}
                className="lg:h-[137px] xl:h-[156px] h-[175px] 2xl:h-[176px] 3xl:h-[211px] 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] object-contain w-[25%]"
                alt="Group81"
              />
              <Image
                src={"images/img_group82.svg"}
                className="lg:h-[137px] xl:h-[156px] h-[175px] 2xl:h-[176px] 3xl:h-[211px] 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] object-contain w-[15%]"
                alt="Group82"
              />
            </Row>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default MetaversewebsitePage;
