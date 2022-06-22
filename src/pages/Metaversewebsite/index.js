import React from "react";

import {
  Column,
  Stack,
  Image,
  Text,
  Button,
  Line,
  PagerIndicator,
  Row,
  TextArea,
  Slider,
  SelectBox,
  List,
} from "components";

const MetaversewebsitePage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef();
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <Column className="bg-black_900 font-roboto items-start justify-start mx-[auto] pb-[109px] 3xl:pb-[130px] lg:pb-[84px] xl:pb-[96px] w-[100%]">
        <Column className="w-[100%]">
          <Stack className="lg:h-[1765px] xl:h-[2019px] h-[2269px] 2xl:h-[2271px] 3xl:h-[2725px] w-[100%]">
            <Stack className="absolute lg:h-[1765px] xl:h-[2019px] h-[2269px] 2xl:h-[2271px] 3xl:h-[2725px] w-[100%]">
              <Stack className="absolute bottom-[34%] font-aclonica lg:h-[1075px] xl:h-[1229px] h-[1381.11px] 2xl:h-[1383px] 3xl:h-[1659px] right-[52%] top-[5%] w-[48%]">
                <Image
                  src={"images/img_group83.png"}
                  className="absolute bottom-[44%] lg:h-[530px] xl:h-[606px] h-[681.01px] 2xl:h-[682px] 3xl:h-[818px] object-contain opacity-op1 right-[48%] top-[7%] w-[52%]"
                  alt="Group83"
                />
                <Image
                  src={"images/img_kyawtuntp5sz3.png"}
                  className="absolute bottom-[41%] lg:h-[630px] xl:h-[720px] h-[809px] 2xl:h-[810px] 3xl:h-[972px] inset-x-[0] mx-[auto] object-contain w-[87%]"
                  alt="kyawtuntp5sz3"
                />
                <Text className="absolute bottom-[70%] font-normal left-[18%] not-italic right-[36%] lg:text-[107px] xl:text-[123px] text-[138.5826873779297px] 2xl:text-[138px] 3xl:text-[166px] text-left text-white_A700 top-[19%] w-[auto]">{`BRB`}</Text>
                <Image
                  src={"images/img_pexelschevanon.png"}
                  className="absolute bottom-[65%] lg:h-[266px] xl:h-[304px] h-[340.73px] 2xl:h-[341px] 3xl:h-[410px] left-[64%] object-contain top-[10%] w-[36%]"
                  alt="pexelschevanon"
                />
                <Image
                  src={"images/img_pexelscapture.png"}
                  className="absolute lg:h-[521px] xl:h-[596px] h-[669.11px] 2xl:h-[670px] 3xl:h-[804px] inset-x-[0] mx-[auto] object-contain top-[52%] w-[70%]"
                  alt="pexelscapture"
                />
              </Stack>
              <Stack className="absolute bottom-[9%] h-[1069.49px] 2xl:h-[1071px] 3xl:h-[1285px] lg:h-[832px] xl:h-[952px] right-[62%] top-[44%] w-[38%]">
                <Image
                  src={"images/img_loopergroup.svg"}
                  className="absolute lg:h-[613px] xl:h-[701px] h-[787.49px] 2xl:h-[789px] 3xl:h-[946px] object-contain opacity-op5 right-[5%] top-[26%] w-[95%]"
                  alt="LooperGroup"
                />
                <Image
                  src={"images/img_group20.svg"}
                  className="absolute bottom-[62%] lg:h-[313px] xl:h-[358px] h-[402px] 2xl:h-[403px] 3xl:h-[483px] left-[26%] object-contain opacity-op1 lg:w-[312px] xl:w-[357px] w-[402px] 3xl:w-[482px]"
                  alt="Group20"
                />
              </Stack>
              <Image
                src={"images/img_topology1.png"}
                className="absolute bottom-[59%] 3xl:h-[1128px] lg:h-[731px] xl:h-[836px] h-[939.22px] 2xl:h-[940px] left-[49%] object-contain opacity-op5 w-[51%]"
                alt="Topology1"
              />
              <Button className="absolute bg-transparent bottom-[96%] left-[34%] right-[10%] top-[3%] w-[56%]">
                {""}
              </Button>
              <Line className="absolute bottom-[62%] h-[3px] top-[38%] w-[100%]" />
              <Text className="absolute bottom-[55%] font-medium font-poppins left-[42%] opacity-op8 right-[49%] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-left text-white_A700 top-[43%] uppercase w-[auto]">{`Hermes`}</Text>
              <PagerIndicator
                className="absolute bottom-[5%] font-poppins h-[466px] inset-x-[0] mx-[auto] top-[74%] w-[auto]"
                count={3}
                activeCss="inline-block cursor-pointer rounded-radius50 w-[10px] h-[10px] bg-bluegray_100_fd absolute lg:mx-[3px] xl:mx-[4px] 2xl:mx-[5px] 3xl:mx-[6px] mx-[5.00px]"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer rounded-radius50 w-[10px] h-[10px] bg-colors absolute lg:mx-[3px] xl:mx-[4px] 2xl:mx-[5px] 3xl:mx-[6px] mx-[5.00px]"
                sliderRef={sliderRef}
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
              <Image
                src={"images/img_group14.svg"}
                className="absolute bottom-[2%] 3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] left-[95%] object-contain top-[94%] w-[5%]"
                alt="Group14"
              />
              <Stack className="absolute bottom-[0] lg:h-[129px] xl:h-[148px] h-[165.35px] 2xl:h-[166px] 3xl:h-[199px] left-[91%] top-[92%] w-[9%]">
                <PagerIndicator
                  className="absolute h-[8px] inset-y-[0] my-[auto] right-[56%] w-[auto]"
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
                  className="absolute lg:h-[129px] xl:h-[148px] h-[165.35px] 2xl:h-[166px] 3xl:h-[199px] left-[32%] object-contain w-[68%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_1.svg"}
                  className="absolute lg:h-[108px] xl:h-[124px] h-[138.59px] 2xl:h-[139px] 3xl:h-[167px] inset-y-[0] left-[18%] my-[auto] object-contain w-[82%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_2.svg"}
                  className="absolute h-[102.39px] 2xl:h-[103px] 3xl:h-[123px] lg:h-[80px] xl:h-[92px] inset-y-[0] left-[7%] my-[auto] object-contain w-[93%]"
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
                  className="absolute h-[102.39px] 2xl:h-[103px] 3xl:h-[123px] lg:h-[80px] xl:h-[92px] inset-y-[0] left-[7%] my-[auto] object-contain w-[93%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_6.svg"}
                  className="absolute lg:h-[108px] xl:h-[124px] h-[138.59px] 2xl:h-[139px] 3xl:h-[167px] inset-y-[0] left-[18%] my-[auto] object-contain w-[82%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_7.svg"}
                  className="absolute lg:h-[129px] xl:h-[148px] h-[165.35px] 2xl:h-[166px] 3xl:h-[199px] left-[32%] object-contain w-[68%]"
                  alt="Frame49"
                />
              </Stack>
              <Image
                src={"images/img_group13.svg"}
                className="absolute bottom-[1%] lg:h-[106px] xl:h-[121px] h-[136px] 2xl:h-[137px] 3xl:h-[164px] left-[93%] object-contain top-[93%] w-[7%]"
                alt="Group13"
              />
              <Stack className="absolute lg:h-[144px] xl:h-[164px] h-[184px] 2xl:h-[185px] 3xl:h-[221px] left-[96%] right-[0] top-[92%] w-[4%]">
                <Image
                  src={"images/img_frame49_8.svg"}
                  className="absolute lg:h-[141px] xl:h-[161px] h-[180.84px] 2xl:h-[181px] 3xl:h-[218px] inset-y-[1%] object-cover w-[100%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_9.svg"}
                  className="absolute lg:h-[144px] xl:h-[164px] h-[184px] 2xl:h-[185px] 3xl:h-[221px] inset-x-[40%] object-contain w-[20%]"
                  alt="Frame49"
                />
                <Image
                  src={"images/img_frame49_10.svg"}
                  className="absolute lg:h-[141px] xl:h-[161px] h-[180.84px] 2xl:h-[181px] 3xl:h-[218px] inset-y-[1%] object-cover w-[100%]"
                  alt="Frame49"
                />
                <PagerIndicator
                  className="absolute bottom-[93%] h-[12.42px] right-[7%] w-[auto]"
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
            <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[7%] my-[auto] right-[1%] w-[92%]">
              <TextArea
                className="placeholder:bg-transparent bg-transparent border-0 font-semibold xl:mr-[1086px] mr-[1221px] 3xl:mr-[1466px] lg:mr-[949px] outline outline-[1px] outline-white_A700 lg:text-[20px] xl:text-[23px] text-[26px] 3xl:text-[31px] text-left placeholder:text-white_A700 text-white_A700 w-[8%]"
                name="BrBVerse"
                placeholder={`BrBVerse`}
              ></TextArea>
              <Column className="lg:mt-[115px] xl:mt-[131px] mt-[148px] 3xl:mt-[177px] w-[100%]">
                <Row className="items-center justify-center lg:pl-[507px] xl:pl-[580px] pl-[653px] 3xl:pl-[784px] lg:pr-[112px] xl:pr-[128px] pr-[145px] 3xl:pr-[174px] w-[100%]">
                  <div className="bg-transparent border-0 w-[32%] input-wrap">
                    <Image
                      src={"images/img_group50.png"}
                      className="absolute z-[1] right-[10px] bg-transparent border-0 lg:right-[7px] xl:right-[8px] 3xl:right-[12px] my-[auto] inset-y-[0]"
                      alt="Group50"
                    />
                    <TextArea
                      className="placeholder:bg-transparent bg-transparent border-0 xl:pr-[106px] pr-[120px] 3xl:pr-[144px] lg:pr-[93px] w-[100%]"
                      name="Group163"
                      placeholder={""}
                    ></TextArea>
                  </div>
                  <Image
                    src={"images/img_group5.svg"}
                    className="xl:h-[102px] h-[114px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] lg:mb-[35px] xl:mb-[40px] mb-[45px] 3xl:mb-[54px] 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] object-contain w-[1%]"
                    alt="Group5"
                  />
                </Row>
              </Column>
              <Column className="items-end lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] lg:pl-[414px] xl:pl-[474px] pl-[533px] 3xl:pl-[639px] w-[100%]">
                <Image
                  src={"images/img_group4.png"}
                  className="lg:h-[33px] xl:h-[38px] h-[42px] 2xl:h-[43px] 3xl:h-[51px] lg:ml-[523px] xl:ml-[598px] ml-[673px] 3xl:ml-[808px] lg:mr-[371px] xl:mr-[424px] mr-[477px] 3xl:mr-[572px] object-contain w-[14%]"
                  alt="Group4"
                />
                <Line className="h-[3px] lg:ml-[414px] xl:ml-[474px] ml-[533px] 3xl:ml-[639px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[60%]" />
              </Column>
              <Column className="lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[100%]">
                <Row className="items-center justify-center lg:pl-[523px] xl:pl-[598px] pl-[673px] 3xl:pl-[808px] lg:pr-[153px] xl:pr-[175px] pr-[197px] 3xl:pr-[236px] w-[100%]">
                  <Column className="items-start w-[7%]">
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
                    <Text className="font-light font-poppins lg:mr-[15px] xl:mr-[17px] mr-[20px] 3xl:mr-[24px] opacity-op7 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-left text-white_A700 w-[auto]">{`Artwork`}</Text>
                  </Column>
                  <Column className="items-start 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] w-[8%]">
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
                    <Text className="font-light font-poppins lg:mr-[26px] xl:mr-[30px] mr-[34px] 3xl:mr-[40px] opacity-op7 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-left text-white_A700 w-[auto]">{`Auction`}</Text>
                  </Column>
                  <Column className="items-start 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] w-[6%]">
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
                    <Text className="font-light font-poppins lg:mr-[28px] xl:mr-[32px] mr-[36px] 3xl:mr-[43px] opacity-op7 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-left text-white_A700 w-[auto]">{`Artist`}</Text>
                  </Column>
                </Row>
              </Column>
              <Row className="font-poppins items-center justify-start lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] mr-[103px] 3xl:mr-[123px] lg:mr-[80px] xl:mr-[91px] xl:mt-[107px] mt-[121px] 3xl:mt-[145px] lg:mt-[94px] w-[90%]">
                <Text className="font-normal not-italic lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-left text-white_A700 w-[auto]">{`aQuaBrB ⚡`}</Text>
                <Text className="font-normal lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] 3xl:ml-[1090px] lg:ml-[706px] xl:ml-[807px] ml-[908px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`View more`}</Text>
                <Image
                  src={"images/img_arrowrightlon.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Arrowrightlon"
                />
              </Row>
              <Column className="font-poppins items-end 3xl:mt-[103px] lg:mt-[66px] xl:mt-[76px] mt-[86px] lg:pl-[392px] xl:pl-[448px] pl-[504px] 3xl:pl-[605px] lg:pr-[63px] xl:pr-[72px] pr-[81.3px] 2xl:pr-[81px] 3xl:pr-[97px] w-[100%]">
                <Stack className="lg:h-[157px] xl:h-[179px] h-[201px] 2xl:h-[202px] 3xl:h-[242px] lg:ml-[392px] xl:ml-[448px] ml-[504px] 3xl:ml-[605px] lg:mr-[63px] xl:mr-[72px] mr-[81.3px] 2xl:mr-[81px] 3xl:mr-[97px] w-[56%]">
                  <TextArea
                    className="absolute placeholder:bg-transparent bg-transparent border-0 font-normal leading-[normal] not-italic opacity-op6 right-[16%] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left placeholder:text-white_A700 text-white_A700 top-[46%] w-[84%]"
                    name="Theinformalco"
                    placeholder={`The informal common names given to the medusa-phase of certain gelatinous members of the subphylum Medusozoa, a major part of the phylum Cnidaria. Jellyfish are mainly free-swimming marine animals with umbrella-shaped bells and trailing tentacles`}
                  ></TextArea>
                  <Image
                    src={"images/img_burstpucker1.png"}
                    className="absolute bottom-[20%] lg:h-[125px] xl:h-[143px] h-[160px] 2xl:h-[161px] 3xl:h-[193px] left-[75%] object-contain w-[25%]"
                    alt="Burstpucker1"
                  />
                </Stack>
                <Stack className="xl:h-[100px] h-[112px] 2xl:h-[113px] 3xl:h-[135px] lg:h-[88px] lg:ml-[392px] xl:ml-[448px] ml-[504px] 3xl:ml-[605px] lg:mr-[154px] xl:mr-[177px] mr-[199px] 3xl:mr-[238px] lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[47%]">
                  <div className="3xl:mb-[63px] 3xl:mr-[420px] absolute bg-gradient1  bottom-[47%] lg:mb-[41px] lg:mr-[272px] mb-[53px] mr-[350px] p-[1px] right-[56%] w-[auto] xl:mb-[47px] xl:mr-[311px] ">
                    <Text className="absolute bg-black_900 font-semibold opacity-op8 outline lg:text-[30px] xl:text-[34px] text-[39.33333206176758px] 2xl:text-[39px] 3xl:text-[47px] text-left uppercase">{`Count down`}</Text>
                  </div>
                  <Row className="absolute items-center justify-between top-[46%] w-[100%]">
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
                <Button className="bg-transparent lg:ml-[392px] xl:ml-[448px] ml-[504px] 3xl:ml-[605px] lg:mr-[232px] xl:mr-[265px] mr-[299px] 3xl:mr-[359px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[40%]">
                  {""}
                </Button>
              </Column>
              <Image
                src={"images/img_group19.svg"}
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[437px] xl:ml-[500px] ml-[563px] 3xl:ml-[675px] lg:mr-[508px] xl:mr-[581px] mr-[654px] 3xl:mr-[785px] mt-[111px] 3xl:mt-[133px] lg:mt-[86px] xl:mt-[98px] object-contain w-[9%]"
                alt="Group19"
              />
              <Column className="font-poppins lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[100%]">
                <Row className="items-start justify-end lg:pl-[379px] xl:pl-[434px] pl-[488px] 3xl:pl-[585px] lg:pr-[168px] xl:pr-[192px] pr-[216px] 3xl:pr-[259px] w-[100%]">
                  <Text className="font-medium lg:mb-[41px] xl:mb-[47px] mb-[53px] 3xl:mb-[63px] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-left text-white_A700 w-[auto]">{`Live Auction ⏱️`}</Text>
                  <Image
                    src={"images/img_burstpucker2.png"}
                    className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] lg:ml-[220px] xl:ml-[252px] ml-[284px] 3xl:ml-[340px] lg:mr-[168px] xl:mr-[192px] mr-[216px] 3xl:mr-[259px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] object-contain opacity-op3 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                    alt="Burstpucker2"
                  />
                </Row>
                <Row className="xl:gap-[1001px] gap-[1126px] 3xl:gap-[1351px] lg:gap-[875px] grid grid-cols-2 items-center justify-between lg:mt-[169px] xl:mt-[193px] mt-[218px] 3xl:mt-[261px] lg:pr-[141px] xl:pr-[161px] pr-[182px] 3xl:pr-[218px] w-[100%]">
                  <Slider
                    slidesToShow={1}
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="lg:h-[45px] xl:h-[51px] h-[57px] 2xl:h-[58px] 3xl:h-[69px] lg:w-[44px] xl:w-[50px] w-[57px] 3xl:w-[68px]"
                    items={[...Array(3)].map(() => (
                      <>
                        <Image
                          src={"images/img_group35.png"}
                          className="lg:h-[45px] xl:h-[51px] h-[57px] 2xl:h-[58px] 3xl:h-[69px] object-cover opacity-op7"
                          alt="Group35"
                        />
                      </>
                    ))}
                    Indicator={({ isActive }) => {
                      if (isActive) {
                        return <div className="" />;
                      }
                      return <div className="" role="button" tabIndex={0} />;
                    }}
                  />
                  <Slider
                    slidesToShow={1}
                    activeIndex={sliderState1}
                    onSlideChanged={(e) => {
                      setsliderState1(e?.item);
                    }}
                    ref={sliderRef1}
                    className="lg:h-[45px] xl:h-[51px] h-[57px] 2xl:h-[58px] 3xl:h-[69px] lg:w-[44px] xl:w-[50px] w-[57px] 3xl:w-[68px]"
                    items={[...Array(3)].map(() => (
                      <>
                        <Image
                          src={"images/img_group34.png"}
                          className="lg:h-[45px] xl:h-[51px] h-[57px] 2xl:h-[58px] 3xl:h-[69px] object-cover opacity-op7"
                          alt="Group34"
                        />
                      </>
                    ))}
                    Indicator={({ isActive }) => {
                      if (isActive) {
                        return <div className="" />;
                      }
                      return <div className="" role="button" tabIndex={0} />;
                    }}
                  />
                </Row>
              </Column>
              <Image
                src={"images/img_burstpucker2_1.png"}
                className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] lg:ml-[126px] xl:ml-[144px] ml-[162px] 3xl:ml-[194px] mr-[1089px] 3xl:mr-[1307px] lg:mr-[847px] xl:mr-[968px] lg:mt-[158px] xl:mt-[181px] mt-[204px] 3xl:mt-[244px] object-contain opacity-op2 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                alt="Burstpucker2"
              />
            </Column>
            <Stack className="absolute bottom-[67%] font-alegreyasc lg:h-[470px] xl:h-[538px] h-[604.2px] 2xl:h-[605px] 3xl:h-[726px] left-[19%] right-[53%] top-[7%] w-[28%]">
              <div className="2xl:mb-[45px] 2xl:ml-[190px] 2xl:mr-[96px] 2xl:mt-[193px] 3xl:mb-[54px] 3xl:ml-[228px] 3xl:mr-[115px] 3xl:mt-[232px] absolute bg-gradient2  bottom-[8%] left-[48%] lg:mb-[35px] lg:ml-[148px] lg:mr-[74px] lg:mt-[150px] lg:p-[2px] mb-[45.63px] ml-[190.36px] mr-[96.19px] mt-[193.64px] p-[3px] right-[24%] top-[32%] w-[auto] xl:mb-[40px] xl:ml-[169px] xl:mr-[85px] xl:mt-[172px] xl:p-[2px] ">
                <Text className="absolute bg-black_900 font-black outline lg:text-[224px] xl:text-[256px] text-[288.0952453613281px] 2xl:text-[288px] 3xl:text-[345px] text-left">{`1`}</Text>
              </div>
              <Text className="absolute bottom-[0] font-black outline outline-[1.43px] outline-white_A700 lg:text-[111px] xl:text-[127px] text-[143.3070831298828px] 2xl:text-[143px] 3xl:text-[172px] text-left top-[70%] w-[auto]">{`Verse`}</Text>
              <Image
                src={"images/img_jizimingv9oawp.png"}
                className="absolute bottom-[59%] lg:h-[195px] xl:h-[222px] h-[249.5px] 2xl:h-[250px] 3xl:h-[300px] left-[28%] object-contain opacity-op3 right-[34%] w-[39%]"
                alt="jizimingv9oawP"
              />
            </Stack>
          </Stack>
          <Row className="font-poppins items-start justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] pl-[100px] 3xl:pl-[120px] lg:pl-[77px] xl:pl-[88px] 3xl:pr-[1086px] lg:pr-[703px] xl:pr-[805px] pr-[905px] w-[100%]">
            <Text className="font-medium ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-left text-white_A700 w-[auto]">
              <span className="text-white_A700 font-poppins">
                <>{`Top`}</>
              </span>
              <span className="text-white_A700_3f font-poppins">
                <>{` contributor`}</>
              </span>
            </Text>
            <SelectBox
              className="bg-transparent lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
              placeholderClassName=""
              name="Expandup"
              placeholder={`Select`}
              isSearchable={false}
              isMulti={false}
            ></SelectBox>
            <Text className="font-medium lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:ml-[39px] xl:ml-[45px] ml-[51px] 3xl:ml-[61px] lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-left text-white_A700 w-[auto]">
              <span className="text-white_A700 font-poppins">
                <>{`In`}</>
              </span>
              <span className="text-white_A700_3f font-poppins">
                <>{` 1day`}</>
              </span>
            </Text>
            <SelectBox
              className="bg-transparent lg:mb-[10px] xl:mb-[12px] mb-[14px] 3xl:mb-[16px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[2%]"
              placeholderClassName=""
              name="Expandup"
              placeholder={`Select`}
              isSearchable={false}
              isMulti={false}
            ></SelectBox>
          </Row>
        </Column>
        <Stack className="lg:h-[321px] xl:h-[367px] h-[412px] 2xl:h-[413px] 3xl:h-[495px] mr-[102.07px] 2xl:mr-[102px] 3xl:mr-[122px] lg:mr-[79px] xl:mr-[90px] lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] w-[93%]">
          <Stack className="absolute font-alegreyasans lg:h-[321px] xl:h-[367px] h-[412px] 2xl:h-[413px] 3xl:h-[495px] w-[100%]">
            <Image
              src={"images/img_burstcircle2.svg"}
              className="absolute lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] object-contain opacity-op21 right-[85%] top-[33%] w-[15%]"
              alt="Burstcircle2"
            />
            <List
              className="absolute bottom-[37%] gap-[0] left-[8%] min-h-[auto] w-[92%]"
              orientation="vertical"
            >
              <Row className="3xl:gap-[111px] lg:gap-[72px] xl:gap-[82px] gap-[93.150024px] 2xl:gap-[93px] grid grid-cols-3 items-center justify-between lg:my-[26px] xl:my-[30px] my-[34.64502px] 2xl:my-[34px] 3xl:my-[41px] w-[100%]">
                <Stack className="3xl:h-[116px] lg:h-[76px] xl:h-[86px] h-[96.56px] 2xl:h-[97px] pb-[1px] w-[100%]">
                  <Stack className="absolute bottom-[0] font-poppins 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] top-[5%] w-[100%]">
                    <div className="2xl:mb-[4px] 2xl:ml-[54px] 2xl:mt-[5px] 3xl:mb-[5px] 3xl:ml-[65px] 3xl:mt-[6px] absolute bg-gradient3  bottom-[5%] left-[16%] lg:mb-[3px] lg:ml-[42px] lg:mt-[4px] mb-[4.54px] ml-[54.53px] mt-[5.68px] p-[1px] rounded-radius1363 top-[6%] w-[84%] xl:mb-[4px] xl:ml-[48px] xl:mt-[5px] ">
                      <Column className="absolute bg-bluegray_100_fd border-solid h-[max-content] inset-y-[0] items-center justify-center my-[auto] 3xl:pb-[11px] lg:pb-[7px] xl:pb-[8px] pb-[9.35px] 2xl:pb-[9px] lg:pt-[10px] xl:pt-[12px] pt-[13.64px] 2xl:pt-[13px] 3xl:pt-[16px] rounded-radius1363">
                        <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] mt-[13.64px] 2xl:mt-[13px] 3xl:mt-[16px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[10px] xl:pr-[11px] pr-[12.93px] 2xl:pr-[12px] 3xl:pr-[15px] w-[100%]">
                          <Text className="font-medium lg:ml-[38px] xl:ml-[44px] ml-[49.98px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Emilie Bulter`}</Text>
                          <Text className="font-medium lg:ml-[39px] xl:ml-[44px] ml-[50.44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mr-[10px] xl:mr-[11px] mr-[12.93px] 2xl:mr-[12px] 3xl:mr-[15px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`10.5BNB`}</Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] mb-[9.35px] 2xl:mb-[9px] lg:mt-[3px] mt-[4.8px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[12px] xl:pr-[14px] pr-[16.46px] 2xl:pr-[16px] 3xl:pr-[19px] w-[100%]">
                          <Text className="font-medium lg:ml-[38px] xl:ml-[44px] ml-[49.98px] 2xl:ml-[50px] 3xl:ml-[60px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`@Emilie`}</Text>
                          <Text className="font-medium lg:ml-[46px] xl:ml-[53px] ml-[59.91px] 2xl:ml-[59px] 3xl:ml-[71px] lg:mr-[12px] xl:mr-[14px] mr-[16.46px] 2xl:mr-[16px] 3xl:mr-[19px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`$10.535.95`}</Text>
                        </Row>
                      </Column>
                    </div>
                    <Image
                      src={"images/img_ellipse65.png"}
                      className="absolute 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] object-contain right-[74%] rounded-radius50 w-[auto]"
                      alt="Ellipse65"
                    />
                  </Stack>
                  <Text className="absolute bottom-[66%] font-alegreyasans font-bold left-[1%] right-[96%] lg:text-[21px] xl:text-[24px] text-[27.26315689086914px] 2xl:text-[27px] 3xl:text-[32px] text-left text-white_A700 w-[auto]">{`1`}</Text>
                </Stack>
                <Stack className="3xl:h-[116px] lg:h-[76px] xl:h-[86px] h-[96.56px] 2xl:h-[97px] pb-[1px] pr-[1px] w-[100%]">
                  <Stack className="absolute bottom-[0] font-poppins 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] inset-x-[0] top-[5%] w-[100%]">
                    <div className="2xl:mb-[4px] 2xl:ml-[54px] 2xl:mt-[5px] 3xl:mb-[5px] 3xl:ml-[65px] 3xl:mt-[6px] absolute bg-gradient3  bottom-[5%] left-[16%] lg:mb-[3px] lg:ml-[42px] lg:mt-[4px] mb-[4.54px] ml-[54.52px] mt-[5.68px] p-[1px] rounded-radius1363 top-[6%] w-[84%] xl:mb-[4px] xl:ml-[48px] xl:mt-[5px] ">
                      <Column className="absolute bg-bluegray_100_fd border-solid h-[max-content] inset-y-[0] items-center justify-center my-[auto] 3xl:pb-[11px] lg:pb-[7px] xl:pb-[8px] pb-[9.35px] 2xl:pb-[9px] lg:pt-[10px] xl:pt-[12px] pt-[13.64px] 2xl:pt-[13px] 3xl:pt-[16px] rounded-radius1363">
                        <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] mt-[13.64px] 2xl:mt-[13px] 3xl:mt-[16px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[10px] xl:pr-[11px] pr-[12.92px] 2xl:pr-[12px] 3xl:pr-[15px] w-[100%]">
                          <Text className="font-medium lg:ml-[38px] xl:ml-[44px] ml-[49.98px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Emilie Bulter`}</Text>
                          <Text className="font-medium lg:ml-[39px] xl:ml-[44px] ml-[50.45px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mr-[10px] xl:mr-[11px] mr-[12.92px] 2xl:mr-[12px] 3xl:mr-[15px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`10.5BNB`}</Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] mb-[9.35px] 2xl:mb-[9px] lg:mt-[3px] mt-[4.8px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[12px] xl:pr-[14px] pr-[16.46px] 2xl:pr-[16px] 3xl:pr-[19px] w-[100%]">
                          <Text className="font-medium lg:ml-[38px] xl:ml-[44px] ml-[49.98px] 2xl:ml-[50px] 3xl:ml-[60px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`@Emilie`}</Text>
                          <Text className="font-medium lg:ml-[46px] xl:ml-[53px] ml-[59.91px] 2xl:ml-[59px] 3xl:ml-[71px] lg:mr-[12px] xl:mr-[14px] mr-[16.46px] 2xl:mr-[16px] 3xl:mr-[19px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`$10.535.95`}</Text>
                        </Row>
                      </Column>
                    </div>
                    <Image
                      src={"images/img_ellipse65_1.png"}
                      className="absolute 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] object-contain right-[74%] rounded-radius50 w-[auto]"
                      alt="Ellipse65"
                    />
                  </Stack>
                  <Text className="absolute bottom-[66%] font-alegreyasans font-bold left-[2%] right-[95%] lg:text-[21px] xl:text-[24px] text-[27.26315689086914px] 2xl:text-[27px] 3xl:text-[32px] text-left text-white_A700 w-[auto]">{`2`}</Text>
                </Stack>
                <Stack className="3xl:h-[116px] lg:h-[76px] xl:h-[86px] h-[96.56px] 2xl:h-[97px] pb-[1px] w-[100%]">
                  <Stack className="absolute bottom-[0] font-poppins 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] top-[5%] w-[100%]">
                    <div className="2xl:mb-[4px] 2xl:ml-[54px] 2xl:mt-[5px] 3xl:mb-[5px] 3xl:ml-[65px] 3xl:mt-[6px] absolute bg-gradient3  bottom-[5%] left-[16%] lg:mb-[3px] lg:ml-[42px] lg:mt-[4px] mb-[4.54px] ml-[54.53px] mt-[5.68px] p-[1px] rounded-radius1363 top-[6%] w-[84%] xl:mb-[4px] xl:ml-[48px] xl:mt-[5px] ">
                      <Column className="absolute bg-bluegray_100_fd border-solid h-[max-content] inset-y-[0] items-center justify-center my-[auto] 3xl:pb-[11px] lg:pb-[7px] xl:pb-[8px] pb-[9.35px] 2xl:pb-[9px] lg:pt-[10px] xl:pt-[12px] pt-[13.64px] 2xl:pt-[13px] 3xl:pt-[16px] rounded-radius1363">
                        <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] mt-[13.64px] 2xl:mt-[13px] 3xl:mt-[16px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[22px] xl:pr-[25px] pr-[28.93px] 2xl:pr-[28px] 3xl:pr-[34px] w-[100%]">
                          <Text className="font-medium lg:ml-[38px] xl:ml-[44px] ml-[49.98px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Emilie Bulter`}</Text>
                          <Text className="font-medium lg:ml-[39px] xl:ml-[44px] ml-[50.44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mr-[22px] xl:mr-[25px] mr-[28.93px] 2xl:mr-[28px] 3xl:mr-[34px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`10BNB`}</Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] mb-[9.35px] 2xl:mb-[9px] lg:mt-[3px] mt-[4.8px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[12px] xl:pr-[14px] pr-[16.46px] 2xl:pr-[16px] 3xl:pr-[19px] w-[100%]">
                          <Text className="font-medium lg:ml-[38px] xl:ml-[44px] ml-[49.98px] 2xl:ml-[50px] 3xl:ml-[60px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`@Emilie`}</Text>
                          <Text className="font-medium lg:ml-[46px] xl:ml-[53px] ml-[59.91px] 2xl:ml-[59px] 3xl:ml-[71px] lg:mr-[12px] xl:mr-[14px] mr-[16.46px] 2xl:mr-[16px] 3xl:mr-[19px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`$10.535.95`}</Text>
                        </Row>
                      </Column>
                    </div>
                    <Image
                      src={"images/img_ellipse65_2.png"}
                      className="absolute 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] object-contain right-[74%] rounded-radius50 w-[auto]"
                      alt="Ellipse65"
                    />
                  </Stack>
                  <Text className="absolute bottom-[66%] font-alegreyasans font-bold left-[2%] right-[95%] lg:text-[21px] xl:text-[24px] text-[27.26315689086914px] 2xl:text-[27px] 3xl:text-[32px] text-left text-white_A700 w-[auto]">{`3`}</Text>
                </Stack>
              </Row>
              <Row className="items-center justify-between lg:my-[26px] xl:my-[30px] my-[34.64502px] 2xl:my-[34px] 3xl:my-[41px] w-[100%]">
                <Stack className="3xl:h-[112px] lg:h-[73px] xl:h-[83px] h-[93.15px] 2xl:h-[94px] w-[28%]">
                  <Stack className="absolute 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] top-[1%] w-[100%]">
                    <Image
                      src={"images/img_rectangle12.png"}
                      className="absolute lg:h-[64px] xl:h-[73px] h-[81.79px] 2xl:h-[82px] 3xl:h-[99px] inset-y-[0] left-[16%] my-[auto] object-contain rounded-radius1363 w-[84%]"
                      alt="Rectangle12"
                    />
                    <Image
                      src={"images/img_ellipse65_3.png"}
                      className="absolute 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] object-contain right-[74%] rounded-radius50 w-[auto]"
                      alt="Ellipse65"
                    />
                  </Stack>
                  <Column className="absolute bottom-[15%] font-poppins items-center justify-start left-[30%] right-[5%] top-[22%] w-[65%]">
                    <Row className="items-center justify-between lg:pr-[5px] xl:pr-[6px] pr-[7.47px] 2xl:pr-[7px] 3xl:pr-[8px] w-[100%]">
                      <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Emilie Bulter`}</Text>
                      <Text className="font-medium lg:ml-[39px] xl:ml-[44px] ml-[50.44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mr-[5px] xl:mr-[6px] mr-[7.47px] 2xl:mr-[7px] 3xl:mr-[8px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`10 BNB`}</Text>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[3px] mt-[4.81px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                      <Text className="font-medium opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`@Emilie`}</Text>
                      <Text className="font-medium lg:ml-[46px] xl:ml-[53px] ml-[59.91px] 2xl:ml-[59px] 3xl:ml-[71px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`$10.535.95`}</Text>
                    </Row>
                  </Column>
                  <Text className="absolute bottom-[65%] font-bold left-[1%] right-[95%] lg:text-[21px] xl:text-[24px] text-[27.26315689086914px] 2xl:text-[27px] 3xl:text-[32px] text-left text-white_A700 w-[auto]">{`4`}</Text>
                </Stack>
                <Stack className="font-poppins 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93.15px] 2xl:ml-[93px] mt-[1px] pr-[1px] w-[28%]">
                  <div className="2xl:mb-[4px] 2xl:ml-[54px] 2xl:mt-[5px] 3xl:mb-[5px] 3xl:ml-[65px] 3xl:mt-[6px] absolute bg-gradient3  bottom-[5%] left-[16%] lg:mb-[3px] lg:ml-[42px] lg:mt-[4px] mb-[4.54px] ml-[54.52px] mr-[1px] mt-[5.68px] p-[1px] right-[0] rounded-radius1363 top-[6%] w-[84%] xl:mb-[4px] xl:ml-[48px] xl:mt-[5px] ">
                    <Column className="absolute bg-bluegray_100_fd border-solid h-[max-content] inset-y-[0] items-center justify-center my-[auto] 3xl:pb-[11px] lg:pb-[7px] xl:pb-[8px] pb-[9.35px] 2xl:pb-[9px] lg:pt-[10px] xl:pt-[12px] pt-[13.63px] 2xl:pt-[13px] 3xl:pt-[16px] rounded-radius1363">
                      <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] mt-[13.63px] 2xl:mt-[13px] 3xl:mt-[16px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[22px] xl:pr-[25px] pr-[28.92px] 2xl:pr-[28px] 3xl:pr-[34px] w-[100%]">
                        <Text className="font-medium lg:ml-[38px] xl:ml-[44px] ml-[49.98px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Emilie Bulter`}</Text>
                        <Text className="font-medium lg:ml-[39px] xl:ml-[44px] ml-[50.45px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mr-[22px] xl:mr-[25px] mr-[28.92px] 2xl:mr-[28px] 3xl:mr-[34px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`10BNB`}</Text>
                      </Row>
                      <Row className="items-center justify-between 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] mb-[9.35px] 2xl:mb-[9px] lg:mt-[3px] mt-[4.81px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[12px] xl:pr-[14px] pr-[16.46px] 2xl:pr-[16px] 3xl:pr-[19px] w-[100%]">
                        <Text className="font-medium lg:ml-[38px] xl:ml-[44px] ml-[49.98px] 2xl:ml-[50px] 3xl:ml-[60px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`@Emilie`}</Text>
                        <Text className="font-medium lg:ml-[46px] xl:ml-[53px] ml-[59.91px] 2xl:ml-[59px] 3xl:ml-[71px] lg:mr-[12px] xl:mr-[14px] mr-[16.46px] 2xl:mr-[16px] 3xl:mr-[19px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`$10.535.95`}</Text>
                      </Row>
                    </Column>
                  </div>
                  <Stack className="absolute font-alegreyasans 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] right-[74%] 3xl:w-[110px] lg:w-[71px] xl:w-[81px] w-[92.01px] 2xl:w-[92px]">
                    <Image
                      src={"images/img_ellipse65_4.png"}
                      className="absolute 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] object-cover rounded-radius50 w-[auto]"
                      alt="Ellipse65"
                    />
                    <Text className="absolute bottom-[64%] font-bold left-[6%] right-[81%] lg:text-[21px] xl:text-[24px] text-[27.26315689086914px] 2xl:text-[27px] 3xl:text-[32px] text-left text-white_A700 w-[auto]">{`5`}</Text>
                  </Stack>
                </Stack>
                <Stack className="font-poppins 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93.14px] 2xl:ml-[93px] mt-[1px] w-[28%]">
                  <div className="2xl:mb-[4px] 2xl:ml-[54px] 2xl:mt-[5px] 3xl:mb-[5px] 3xl:ml-[65px] 3xl:mt-[6px] absolute bg-gradient3  bottom-[5%] left-[16%] lg:mb-[3px] lg:ml-[42px] lg:mt-[4px] mb-[4.54px] ml-[54.53px] mt-[5.68px] p-[1px] rounded-radius1363 top-[6%] w-[84%] xl:mb-[4px] xl:ml-[48px] xl:mt-[5px] ">
                    <Column className="absolute bg-bluegray_100_fd border-solid h-[max-content] inset-y-[0] items-center justify-center my-[auto] 3xl:pb-[11px] lg:pb-[7px] xl:pb-[8px] pb-[9.35px] 2xl:pb-[9px] lg:pt-[10px] xl:pt-[12px] pt-[13.63px] 2xl:pt-[13px] 3xl:pt-[16px] rounded-radius1363">
                      <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] mt-[13.63px] 2xl:mt-[13px] 3xl:mt-[16px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[10px] xl:pr-[11px] pr-[12.93px] 2xl:pr-[12px] 3xl:pr-[15px] w-[100%]">
                        <Text className="font-medium lg:ml-[38px] xl:ml-[44px] ml-[49.98px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Emilie Bulter`}</Text>
                        <Text className="font-medium lg:ml-[39px] xl:ml-[44px] ml-[50.44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mr-[10px] xl:mr-[11px] mr-[12.93px] 2xl:mr-[12px] 3xl:mr-[15px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`10.5BNB`}</Text>
                      </Row>
                      <Row className="items-center justify-between 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] mb-[9.35px] 2xl:mb-[9px] lg:mt-[3px] mt-[4.81px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:pl-[38px] xl:pl-[44px] pl-[49.98px] 2xl:pl-[50px] 3xl:pl-[60px] lg:pr-[12px] xl:pr-[14px] pr-[16.46px] 2xl:pr-[16px] 3xl:pr-[19px] w-[100%]">
                        <Text className="font-medium lg:ml-[38px] xl:ml-[44px] ml-[49.98px] 2xl:ml-[50px] 3xl:ml-[60px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`@Emilie`}</Text>
                        <Text className="font-medium lg:ml-[46px] xl:ml-[53px] ml-[59.91px] 2xl:ml-[59px] 3xl:ml-[71px] lg:mr-[12px] xl:mr-[14px] mr-[16.46px] 2xl:mr-[16px] 3xl:mr-[19px] opacity-op4 lg:text-[14px] xl:text-[16px] text-[18.175437927246094px] 2xl:text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`$10.535.95`}</Text>
                      </Row>
                    </Column>
                  </div>
                  <Stack className="absolute font-alegreyasans 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] right-[74%] 3xl:w-[110px] lg:w-[71px] xl:w-[81px] w-[92.01px] 2xl:w-[92px]">
                    <Image
                      src={"images/img_ellipse65_5.png"}
                      className="absolute 3xl:h-[111px] lg:h-[72px] xl:h-[82px] h-[92.01px] 2xl:h-[93px] object-cover rounded-radius50 w-[auto]"
                      alt="Ellipse65"
                    />
                    <Text className="absolute bottom-[64%] font-bold left-[6%] right-[79%] lg:text-[21px] xl:text-[24px] text-[27.26315689086914px] 2xl:text-[27px] 3xl:text-[32px] text-left text-white_A700 w-[auto]">{`6`}</Text>
                  </Stack>
                </Stack>
              </Row>
            </List>
          </Stack>
          <Text className="absolute bottom-[6%] font-normal font-poppins left-[42%] not-italic right-[30%] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center text-white_A700 top-[84%] w-[auto]">{`OUR PARTNERS`}</Text>
        </Stack>
        <Column className="font-poppins items-center mb-[109px] 3xl:mb-[130px] lg:mb-[84px] xl:mb-[96px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[100%]">
          <Stack className="lg:h-[179px] xl:h-[204px] h-[229px] 2xl:h-[230px] 3xl:h-[275px] lg:ml-[102px] xl:ml-[117px] ml-[132px] 3xl:ml-[158px] mr-[109px] 3xl:mr-[130px] lg:mr-[84px] xl:mr-[96px] w-[83%]">
            <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] w-[97%]">
              <Image
                src={"images/img_panteracrypto.png"}
                className="lg:h-[125px] xl:h-[143px] h-[160px] 2xl:h-[161px] 3xl:h-[193px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:my-[14px] xl:my-[16px] my-[18px] 3xl:my-[21px] object-contain w-[26%]"
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
                  className="absolute bottom-[13%] lg:h-[125px] xl:h-[143px] h-[160px] 2xl:h-[161px] 3xl:h-[193px] inset-x-[0] mx-[auto] object-contain top-[5%] lg:w-[124px] xl:w-[142px] w-[160px] 3xl:w-[192px]"
                  alt="Frame55"
                />
                <Text className="absolute bottom-[5%] font-medium inset-x-[0] mx-[auto] rotate-[-180deg] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 top-[79%] w-[max-content]">{`Decentraland`}</Text>
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
            <div className="absolute bg-gradient3  p-[1px] rounded-radius1363 w-[100%] ">
              <div className="absolute bg-bluegray_100_fd border-solid lg:h-[179px] xl:h-[204px] h-[229px] 2xl:h-[230px] 3xl:h-[275px] rounded-radius1363"></div>
            </div>
          </Stack>
          <Row className="font-roboto items-end justify-between xl:mt-[104px] mt-[117px] 3xl:mt-[140px] lg:mt-[91px] pl-[100px] 3xl:pl-[120px] lg:pl-[77px] xl:pl-[88px] pr-[103px] 3xl:pr-[123px] lg:pr-[80px] xl:pr-[91px] w-[100%]">
            <Column className="items-start justify-start ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] w-[21%]">
              <Text className="font-semibold lg:mr-[143px] xl:mr-[164px] mr-[185px] 3xl:mr-[222px] outline outline-[1px] outline-white_A700 lg:text-[20px] xl:text-[23px] text-[26px] 3xl:text-[31px] text-left text-white_A700 w-[auto]">
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
              </Column>
              <Image
                src={"images/img_logofooter.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mr-[108px] xl:mr-[124px] mr-[140px] 3xl:mr-[168px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] object-contain w-[54%]"
                alt="Logofooter"
              />
            </Column>
            <Image
              src={"images/img_footer.svg"}
              className="lg:h-[137px] xl:h-[156px] h-[175px] 2xl:h-[176px] 3xl:h-[211px] lg:ml-[123px] xl:ml-[141px] ml-[159px] 3xl:ml-[190px] mr-[103px] 3xl:mr-[123px] lg:mr-[80px] xl:mr-[91px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] object-contain w-[54%]"
              alt="Footer"
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default MetaversewebsitePage;
