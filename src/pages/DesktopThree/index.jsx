import React from "react";

import { Button, Img, Line, List, Text } from "components";

const DesktopThreePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-end mx-auto pt-[27px] w-full">
        <header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="sm:h-[251px] md:h-[59px] h-[73px] md:mt-0 mt-[9px] relative w-full">
            <Button className="absolute cursor-pointer leading-[normal] min-w-[161px] right-[14%] rounded-md text-center text-xl top-[0]">
              Get Started{" "}
            </Button>
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <ul className="flex sm:flex-col flex-row gap-10 sm:hidden items-start justify-center w-[24%] md:w-full common-row-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-col gap-[33px] items-center justify-start">
                        <Text
                          className="text-light_blue-A700 text-xl"
                          size="txtRobotoRegular20"
                        >
                          Home{" "}
                        </Text>
                        <Line className="bg-light_blue-A700 h-px w-full" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-black-900 hover:text-light_blue-A700 text-xl"
                    >
                      <Text size="txtRobotoRegular20Black900">About </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-black-900 hover:text-light_blue-A700 text-xl"
                    >
                      <Text size="txtRobotoRegular20Black900">Services</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-black-900 hover:text-light_blue-A700 text-xl"
                    >
                      <Text size="txtRobotoRegular20Black900">Reviews</Text>
                    </a>
                  </li>
                </ul>
                <Line className="bg-light_blue-A700_63 h-px w-full" />
              </div>
            </div>
          </div>
          <Img
            className="h-[69px] md:h-auto mb-[13px] md:ml-[0] ml-[230px] mr-[1301px] object-cover w-[69px]"
            src="images/img_logo.png"
            alt="logo"
          />
        </header>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-6xl mt-[99px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-light_blue-A700_01 tracking-[2.50px] uppercase"
                size="txtRobotoRegular25"
              >
                Smart Business
              </Text>
              <Text
                className="leading-[130.00%] mt-1 md:text-5xl text-[60.55px] text-black-900"
                size="txtRobotoBold6055"
              >
                <span className="text-black-900 font-roboto text-left font-bold">
                  Connecting people is our{" "}
                </span>
                <span className="text-light_blue-A700 font-roboto text-left font-bold">
                  <>
                    business
                    <br />
                  </>
                </span>
              </Text>
              <Text
                className="leading-[150.00%] mt-2.5 text-base text-black-900_90 w-[83%] sm:w-full"
                size="txtRobotoRegular16"
              >
                As a rule the organization settles on the inventive and media
                choices. Regularly it supplies supporting statistical.
              </Text>
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start mt-7 w-[78%] md:w-full">
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[194px] text-center text-xl"
                  shape="round"
                  size="sm"
                >
                  Get Started{" "}
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[188px]"
                  leftIcon={
                    <div className="h-[29px] mr-[15px] w-[29px] bg-light_blue-A700 p-2 rounded-[14px] flex justify-center items-center">
                      <Img
                        className="h-[11px] rounded-[1px]"
                        src="images/img_overflowmenu.svg"
                        alt="overflow_menu"
                      />
                    </div>
                  }
                  shape="round"
                  color="light_blue_A700_63_01"
                  size="sm"
                  variant="outline"
                >
                  <div className="font-medium leading-[normal] text-base text-left">
                    Play Video
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:h-[275px] h-[500px] p-[9px] relative w-[500px] sm:w-full">
            <div className="absolute bottom-[2%] md:h-[275px] h-[439px] inset-x-[0] mx-auto w-[96%] sm:w-full">
              <div className="h-[439px] m-auto w-full">
                <Img
                  className="h-[277px] mb-[undefinedpx] mt-auto mx-auto z-[1]"
                  src="images/img_freepiktable.svg"
                  alt="freepiktable"
                />
                <Img
                  className="h-[89px] mb-[-26.34px] ml-auto mr-[121px] z-[1]"
                  src="images/img_freepiktarget.svg"
                  alt="freepiktarget"
                />
                <div className="md:h-[275px] h-[376px] mt-auto mx-auto w-full">
                  <div className="md:h-[275px] h-[376px] m-auto w-full">
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[276px] inset-x-[0] items-center justify-end mx-auto p-[3px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group5.svg')",
                      }}
                    >
                      <Img
                        className="h-52 mb-[5px] mt-14"
                        src="images/img_freepikshadows.svg"
                        alt="freepikshadows"
                      />
                    </div>
                    <Img
                      className="absolute h-[246px] left-[33%] top-[0]"
                      src="images/img_freepikcharacter.svg"
                      alt="freepikcharacte"
                    />
                  </div>
                  <Img
                    className="absolute h-60 left-[1%] top-[13%]"
                    src="images/img_freepikcharacter_blue_gray_800.svg"
                    alt="freepikcharacte_One"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[4%] w-[31%]">
                <div className="h-80 md:h-[210px] relative w-full">
                  <Img
                    className="absolute bottom-[0] h-[210px] right-[3%]"
                    src="images/img_freepikbottom.svg"
                    alt="freepikbottom"
                  />
                  <div className="absolute h-[165px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      className="h-[69px] mb-[-23.84px] ml-auto mr-[26px] z-[1]"
                      src="images/img_play.svg"
                      alt="play"
                    />
                    <div className="md:h-[111px] h-[120px] mt-auto mx-auto w-full">
                      <div className="absolute md:h-[111px] h-[120px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute h-24 md:h-[93px] left-[0] top-[0] w-[90%]">
                          <div className="absolute md:h-[70px] h-[74px] left-[0] top-[0] w-[96%]">
                            <Img
                              className="absolute h-[52px] left-[0] top-[0]"
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                            <div
                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[70px] items-center justify-start right-[0] w-[47%]"
                              style={{
                                backgroundImage: "url('images/img_group6.svg')",
                              }}
                            >
                              <Img
                                className="h-[70px]"
                                src="images/img_user.svg"
                                alt="user"
                              />
                            </div>
                          </div>
                          <Img
                            className="absolute h-[93px] inset-y-[0] my-auto right-[0]"
                            src="images/img_user_light_blue_a700.svg"
                            alt="user_One"
                          />
                        </div>
                        <Img
                          className="absolute h-[89px] right-[37%] top-[2%]"
                          src="images/img_settings.svg"
                          alt="settings"
                        />
                        <Img
                          className="absolute bottom-[0] h-[111px] right-[0]"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-16 items-center justify-start right-[0] top-[6%] w-[22%]"
                        style={{
                          backgroundImage: "url('images/img_group7.svg')",
                        }}
                      >
                        <Img
                          className="h-16"
                          src="images/img_sort.svg"
                          alt="sort"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[140px] inset-x-[0] mx-auto top-[2%]"
              src="images/img_freepikspeech.svg"
              alt="freepikspeech"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1174px] mt-[150px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-1 flex-col h-[486px] sm:h-auto items-center justify-start rotate-[180deg] w-[486px] sm:w-full">
            <div className="flex flex-col h-[486px] sm:h-auto items-center justify-start rotate-[180deg] w-[486px] sm:w-full">
              <Img
                className="h-[486px] md:h-auto object-cover w-[486px] sm:w-full"
                src="images/img_rectangle36.png"
                alt="rectangleThirtySix"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[94px] w-[43%] md:w-full">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-light_blue-A700 tracking-[2.50px] uppercase"
              size="txtRobotoMedium25"
            >
              About us
            </Text>
            <Text
              className="leading-[130.00%] mt-1 sm:text-[39px] md:text-[45px] text-[49px] text-black-900 w-[99%] sm:w-full"
              size="txtRobotoBold49"
            >
              Platform Dedicated To Promoting{" "}
            </Text>
            <Text
              className="leading-[150.00%] mt-3.5 text-black-900_90 text-xl w-full"
              size="txtRobotoRegular20Black90090"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vestibulum sagittis ultrices consectetur adipiscing elit.
              fringilla quisque pulvinar..
            </Text>
            <div className="bg-light_blue-A700 flex flex-col items-center justify-start mt-[30px] p-[18px] rounded-[10px]">
              <Text
                className="text-white-A700 text-xl"
                size="txtRobotoRegular20WhiteA700"
              >
                What we do?{" "}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1164px] mt-[218px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-start w-full">
            <Text
              className="sm:text-[38.44px] md:text-[44.44px] text-[48.44px] text-black-900"
              size="txtRobotoMedium4844"
            >
              How We Work
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col justify-start w-[28%] md:w-full">
                <Img
                  className="h-[150px] md:ml-[0] ml-[87px] w-[150px]"
                  src="images/img_1stfeature.svg"
                  alt="1stfeature"
                />
                <Text
                  className="md:ml-[0] ml-[75px] mt-16 sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtRobotoMedium28"
                >
                  Start Design{" "}
                </Text>
                <Text
                  className="leading-[150.00%] mt-2 text-black-900_99 text-center text-xl w-full"
                  size="txtRobotoRegular20Black90099"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra suscipit adipiscing elit.
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col gap-[22px] items-center justify-start w-[30%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[61px] items-start justify-start w-[45%] md:w-full">
                  <Img
                    className="h-[150px] ml-0.5 md:ml-[0] w-[150px]"
                    src="images/img_2ndicon.svg"
                    alt="2ndicon"
                  />
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtRobotoMedium28"
                  >
                    Go to Code
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] text-black-900_90 text-center text-xl w-full"
                  size="txtRobotoRegular20Black90090"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra suscipit adipiscing elit.
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[61px] items-center justify-start w-[29%] md:w-full">
                <div className="border-4 border-light_blue-A700 border-solid flex flex-col h-[150px] items-center justify-start p-10 sm:px-5 rounded-[50%] w-[150px]">
                  <Img
                    className="h-[70px] w-[70px]"
                    src="images/img_group147.svg"
                    alt="group147"
                  />
                </div>
                <div className="flex flex-col gap-[21px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[73px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtRobotoMedium28"
                  >
                    Final Deliverd
                  </Text>
                  <Text
                    className="leading-[150.00%] text-black-900_90 text-center text-xl w-full"
                    size="txtRobotoRegular20Black90090"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra suscipit adipiscing elit.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1127px] mt-[129px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[65px] items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="sm:mt-0 mt-1.5 sm:text-[38.44px] md:text-[44.44px] text-[48.44px] text-black-900"
                size="txtRobotoMedium4844"
              >
                What Our Customers are Saying.
              </Text>
              <Img className="h-[50px]" src="images/img_cta.svg" alt="cta" />
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[67px] grid md:grid-cols-1 grid-cols-2 w-[81%]"
              orientation="horizontal"
            >
              <div className="flex relative w-full">
                <div className="bg-light_blue-A700 h-[283px] ml-[undefinedpx] my-auto rounded-bl-[10px] rounded-tl-[10px] w-[15%] z-[1]"></div>
                <div className="flex flex-col items-start justify-start ml-[undefinedpx] mr-[92px] my-auto w-[48%] z-[1]">
                  <Text
                    className="leading-[150.00%] text-black-900_99 text-xl w-full"
                    size="txtRobotoRegular20Black90099"
                  >
                    I recently concluded a complete messaging revamp for an
                    exciting com
                  </Text>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-11 w-[76%] md:w-full">
                    <Line className="bg-black-900_99 h-0.5 mb-[9px] mt-3 w-1/5" />
                    <Text
                      className="text-black-900_ab text-xl"
                      size="txtRobotoRegular20Black900ab"
                    >
                      Leo Aminoff
                    </Text>
                  </div>
                  <Text
                    className="ml-10 md:ml-[0] mt-3 text-black-900_87 text-xl"
                    size="txtRobotoRegular20Black90087"
                  >
                    Product Designer
                  </Text>
                </div>
                <div className="bg-gray-400 border-2 border-solid border-white-A700 flex flex-col h-[65px] items-center justify-start ml-[-32px] my-auto p-0.5 rounded-[32px] w-[65px] z-[1]">
                  <Img
                    className="h-[61px] md:h-auto rounded-[50%] w-[61px]"
                    src="images/img_box1.png"
                    alt="boxOne"
                  />
                </div>
                <div className="border border-light_blue-A700_63_01 border-solid h-[283px] ml-[undefinedpx] mr-auto my-auto rounded-[10px] shadow-bs w-full z-[1]"></div>
              </div>
              <div className="h-[283px] relative w-full">
                <div className="absolute bg-light_blue-A700 h-[283px] inset-y-[0] left-[0] my-auto rounded-bl-[10px] rounded-tl-[10px] w-[15%]"></div>
                <div className="flex flex-col h-full items-start justify-start ml-auto mr-[38px] my-auto w-[61%]">
                  <Text
                    className="leading-[150.00%] text-black-900_99 text-xl w-full"
                    size="txtRobotoRegular20Black90099"
                  >
                    I recently concluded a complete messaging revamp for an
                    excitin company{" "}
                  </Text>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-11 w-[51%] md:w-full">
                    <Line className="bg-black-900_99 h-0.5 mb-[9px] mt-3 w-[24%]" />
                    <Text
                      className="text-black-900_ab text-xl"
                      size="txtRobotoRegular20Black900ab"
                    >
                      Carla Dias
                    </Text>
                  </div>
                  <Text
                    className="ml-10 md:ml-[0] mt-[11px] text-black-900_87 text-xl"
                    size="txtRobotoRegular20Black90087"
                  >
                    Product Designer
                  </Text>
                </div>
                <div className="absolute border border-light_blue-A700_63_01 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-[31px] sm:px-5 rounded-[10px] shadow-bs w-full">
                  <div className="bg-gray-400 border-2 border-solid border-white-A700 flex flex-col h-[65px] items-center justify-start my-[78px] p-0.5 rounded-[32px] w-[65px]">
                    <Img
                      className="h-[61px] md:h-auto rounded-[50%] w-[61px]"
                      src="images/img_box1_61x61.png"
                      alt="boxOne"
                    />
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[338px] items-center justify-end mt-44 p-[76px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_cta_blue_50.svg')" }}
        >
          <div className="flex flex-col items-center justify-start w-[34%] md:w-full">
            <Text
              className="sm:text-[27.25px] md:text-[29.25px] text-[31.25px] text-light_blue-A700_04 text-right"
              size="txtRobotoMedium3125"
            >
              Sign Up to Our Newsletter
            </Text>
            <Text
              className="mt-[11px] text-black-900_99 text-center text-xl"
              size="txtRobotoMedium20"
            >
              Yours could be one of them.
            </Text>
            <div className="border border-light_blue-A700_6c border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[30px] p-[15px] rounded-[10px] w-full">
              <Img
                className="h-[25px] ml-2.5 sm:ml-[0]"
                src="images/img_lock.svg"
                alt="lock"
              />
              <Text
                className="sm:ml-[0] ml-[25px] text-black-900_90 text-xl"
                size="txtRobotoRegular20Black90090"
              >
                Enter your email
              </Text>
              <Button
                className="cursor-pointer leading-[normal] min-w-[102px] sm:ml-[0] ml-[134px] text-center text-xl"
                shape="round"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[449px] items-center justify-center pt-[62px] w-full"
            style={{ backgroundImage: "url('images/img_footer2.svg')" }}
          >
            <div className="flex flex-col gap-[53px] items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[69%] md:w-full">
                <ul className="flex flex-col items-start justify-start w-[13%] md:w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <Img
                        className="h-[69px] md:h-auto object-cover"
                        src="images/img_logo.png"
                        alt="logo_One"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[7px] text-black-900_99 text-xl"
                    >
                      <Text size="txtRobotoRegular20Black90099">
                        Smart business
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[23px] text-black-900_99 text-xl"
                    >
                      <Text size="txtRobotoRegular20Black90099">Community</Text>
                    </a>
                  </li>
                </ul>
                <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[153px] md:mt-0 mt-0.5 w-[18%] md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtRobotoMedium25Black900"
                  >
                    Resources
                  </Text>
                  <ul className="flex flex-col items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-black-900_99 text-xl"
                      >
                        <Text size="txtRobotoRegular20Black90099">
                          <>Start Business</>
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[22px] text-black-900_99 text-xl"
                      >
                        <Text size="txtRobotoRegular20Black90099">
                          Digital Marketing
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[19px] text-black-900_99 text-xl"
                      >
                        <Text size="txtRobotoRegular20Black90099">
                          Course Creation
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-5 text-black-900_99 text-xl"
                      >
                        <Text size="txtRobotoRegular20Black90099">
                          Business Accelerator
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[105px] md:mt-0 mt-0.5 w-[17%] md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtRobotoMedium25Black900"
                  >
                    Mission
                  </Text>
                  <ul className="flex flex-col gap-[19px] items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-black-900_99 text-xl"
                      >
                        <Text size="txtRobotoRegular20Black90099">
                          <>About Digital Analyst</>
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-black-900_99 text-xl"
                      >
                        <Text size="txtRobotoRegular20Black90099">Team</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-black-900_99 text-xl"
                      >
                        <Text size="txtRobotoRegular20Black90099">
                          <>Become a Partner</>
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-black-900_99 text-xl"
                      >
                        <Text size="txtRobotoRegular20Black90099">
                          Privacy Policy
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[108px] w-1/5 md:w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtRobotoMedium20Black900"
                  >
                    <>Contact</>
                  </Text>
                  <ul className="flex flex-col items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-black-900_99 text-xl"
                      >
                        <Text size="txtRobotoRegular20Black90099">
                          <>041-774073</>
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[22px] text-black-900_99 text-xl underline"
                      >
                        <Text>hello@digitalanalyst.org</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[19px] text-black-900_99 text-xl"
                      >
                        <Text>Contact Form</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient  flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-[34px] sm:px-5 w-full">
                <Text
                  className="sm:ml-[0] ml-[196px] text-white-A700 text-xl"
                  size="txtRobotoMedium20WhiteA700"
                >
                  © 2021 DigitalAnalyst.org. A 50 non-profit organization. EIN:
                  -3410655
                </Text>
                <Img
                  className="h-[31px] sm:ml-[0] ml-[138px]"
                  src="images/img_socialmedia.svg"
                  alt="socialmedia"
                />
                <Button
                  className="cursor-pointer leading-[normal] min-w-[131px] sm:ml-[0] ml-[30px] text-center text-xl"
                  shape="round"
                  color="white_A700"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DesktopThreePage;
