import React, { useState } from "react";
import { Box, Flex, useColorModeValue,Select, Image, Spacer, Text } from "@chakra-ui/react";
import { VolTTpools24h } from "../VolTTpools24h/VolTTpools24h";
import { VolTTpools7d } from "../VolTTpools7d";
import { VolTTpools30d } from "../VolTTpools30d";
import { VolTTpairs24h } from "../VolTTpairs24h";
import { VolTTpairs7d } from "../VolTTpairs7d/VolTTpairs7d";
import { VolTTpairs30d } from "../VolTTpairs30d/VolTTpairs30d";
import { LiqTTpools24h } from "../LiqTTpools24h";
import { LiqTTpools7d } from "../LiqTTpools7d";
import { LiqTTpools30d } from "../LiqTTpools30d";
import { LiqTTpairs24h } from "../LiqTTpairs24h/LiqTTpairs24h";
import { LiqTTpairs7d } from "../LiqTTpairs7d/LiqTTpairs7d";
import { LiqTTpairs30d } from "../LiqTTpairs30d/LiqTTpairs30d";
import Powered_by_Covalent_Light_Wide_Full from "../../images/Powered_by_Covalent_Light_Wide_Full.png";
import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
  } from "@chakra-ui/react";
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import "@fontsource/roboto"
  import { CovalentLogo } from "../CovalentLogo";

export const Widget = (props) => {
    const borderColor = useColorModeValue(props.text_color ? props.text_color : "gray.600", "gray.600");
    const BoxBgColor = useColorModeValue(props.bg_color ? props.bg_color : "blue", "#243036");
    const [volumeLiquidity, setVolumeLiquidity] = useState('Volume');
    const [tradingCategory, setTradingCategory] = useState('Top Trading Pools');
    const [timeFrame, setTimeFrame] = useState('24h');


        return (
            <>     
          <Flex
                bg={BoxBgColor}
                w="full"
                borderColor={borderColor}
                height='38px'
          >
              
              <Box >
              <Menu closeOnSelect={true}>
                      <MenuButton
                        as={Button} 
                        rightIcon={<ChevronDownIcon/>} 
                        bgColor={BoxBgColor} 
                        borderWidth='0px'
                        textColor={props.text_color}
                        fontFamily={'Roboto'}
                        >
                      {volumeLiquidity}    
                      </MenuButton>
                      <MenuList bgColor={BoxBgColor} closeOnSelect={true} zIndex='5' >
                            <MenuItem onClick={() => setVolumeLiquidity('Volume')} bgColor={BoxBgColor} borderWidth='0px' zIndex='5' textColor={props.text_color} fontFamily={'Roboto'}> Volume</MenuItem>
                            <MenuItem onClick={() => setVolumeLiquidity('Liquidity')} bgColor={BoxBgColor} borderWidth='0px' zIndex='5' textColor={props.text_color} fontFamily={'Roboto'}> Liquidity</MenuItem>
                      </MenuList>
              </Menu>
              </Box>
              <Box >
              <Menu closeOnSelect={true}>
                      <MenuButton
                        as={Button} 
                        rightIcon={<ChevronDownIcon/>} 
                        bgColor={BoxBgColor} 
                        borderWidth='0px'
                        textColor={props.text_color}
                        fontFamily={'Roboto'}
                        >
                      {tradingCategory}    
                      </MenuButton>
                      <MenuList bgColor={BoxBgColor} closeOnSelect={true} zIndex='5' >
                            <MenuItem onClick={() => setTradingCategory('Top Trading Pools')} bgColor={BoxBgColor} borderWidth='0px' zIndex='5' textColor={props.text_color} fontFamily={'Roboto'}> Top Trading Pools</MenuItem>
                            <MenuItem onClick={() => setTradingCategory('Top Tokens')} bgColor={BoxBgColor} borderWidth='0px' zIndex='5' textColor={props.text_color} fontFamily={'Roboto'}> Top Tokens</MenuItem>
                      </MenuList>
              </Menu>
              </Box>
              <Box >
              <Menu closeOnSelect={true}>
                      <MenuButton
                        as={Button} 
                        rightIcon={<ChevronDownIcon/>} 
                        bgColor={BoxBgColor} 
                        borderWidth='0px'
                        textColor={props.text_color}
                        fontFamily={'Roboto'}
                        >
                      {timeFrame}    
                      </MenuButton>
                      <MenuList bgColor={BoxBgColor} closeOnSelect={true} zIndex='5' >
                            <MenuItem onClick={() => setTimeFrame('24h')} bgColor={BoxBgColor} borderWidth='0px' zIndex='5' textColor={props.text_color} fontFamily={'Roboto'}> 24h</MenuItem>
                            <MenuItem onClick={() => setTimeFrame('7d')} bgColor={BoxBgColor} borderWidth='0px' zIndex='5' textColor={props.text_color} fontFamily={'Roboto'}> 7d</MenuItem>
                            {/*<MenuItem onClick={() => setTimeFrame('30d')} bgColor={BoxBgColor} borderWidth='0px' zIndex='5' textColor={props.text_color} fontFamily={'Roboto'}> 30d</MenuItem>*/}
                      </MenuList>
              </Menu>
              </Box>
              <Spacer />
              <Box w='150px'>
                <Image
                borderRadius='full'
                boxSize='30px'
                w='150px'
                objectFit='cover'
                src={Powered_by_Covalent_Light_Wide_Full}
                alt='Powered by Covalent'
                />
              </Box>
          </Flex>            
          {
                (() => {
                    if(volumeLiquidity==='Volume' && tradingCategory==='Top Trading Pools' && timeFrame==='24h') {
                        return (
                            <VolTTpools24h
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            api_key={props.api_key}
                            bg_color={props.bg_color}
                            text_color={props.text_color}
                            />
                        )
                    } 
                    else if (volumeLiquidity==='Volume' && tradingCategory==='Top Trading Pools' && timeFrame==='7d') {
                        return (
                            <VolTTpools7d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            api_key={props.api_key}
                            bg_color={props.bg_color}
                            text_color={props.text_color}
                            />
                        )}
                    else if (volumeLiquidity==='Volume' && tradingCategory==='Top Trading Pools' && timeFrame==='30d') {
                        return (
                            <VolTTpools30d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            api_key={props.api_key}
                            bg_color={props.bg_color}
                            text_color={props.text_color}
                            />
                        )}
                    else if (volumeLiquidity==='Volume' && tradingCategory==='Top Tokens' && timeFrame==='24h') {
                        return (
                            <VolTTpairs24h 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            api_key={props.api_key}
                            bg_color={props.bg_color}
                            text_color={props.text_color}
                            />
                        )}
                    else if (volumeLiquidity==='Volume' && tradingCategory==='Top Tokens' && timeFrame==='7d') {
                        return (
                            <VolTTpairs7d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            api_key={props.api_key}
                            bg_color={props.bg_color}
                            text_color={props.text_color}
                            />
                        )}
                    else if (volumeLiquidity==='Volume' && tradingCategory==='Top Tokens' && timeFrame==='30d') {
                        return (
                            <VolTTpairs30d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            api_key={props.api_key}
                            bg_color={props.bg_color}
                            text_color={props.text_color}
                            />
                        )}
                    else if (volumeLiquidity==='Liquidity' && tradingCategory==='Top Trading Pools' && timeFrame==='24h') {
                        return (
                            <LiqTTpools24h 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            api_key={props.api_key}
                            bg_color={props.bg_color}
                            text_color={props.text_color}
                            />
                        )}
                    else if (volumeLiquidity==='Liquidity' && tradingCategory==='Top Trading Pools' && timeFrame==='7d') {
                        return (
                            <LiqTTpools7d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            api_key={props.api_key}
                            bg_color={props.bg_color}
                            text_color={props.text_color}
                            />
                        )}
                    else if (volumeLiquidity==='Liquidity' && tradingCategory==='Top Trading Pools' && timeFrame==='30d') {
                        return (
                            <LiqTTpools30d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            api_key={props.api_key}
                            bg_color={props.bg_color}
                            text_color={props.text_color}
                            />
                        )}
                    else if (volumeLiquidity==='Liquidity' && tradingCategory==='Top Tokens' && timeFrame==='24h') {
                        return (
                            <LiqTTpairs24h 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            api_key={props.api_key}
                            bg_color={props.bg_color}
                            text_color={props.text_color}
                            />
                        )}
                    else if (volumeLiquidity==='Liquidity' && tradingCategory==='Top Tokens' && timeFrame==='7d') {
                        return (
                            <LiqTTpairs7d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            api_key={props.api_key}
                            bg_color={props.bg_color}
                            text_color={props.text_color}
                            />
                        )}
                    else if (volumeLiquidity==='Liquidity' && tradingCategory==='Top Tokens' && timeFrame==='30d') {
                        return (
                            <LiqTTpairs30d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            api_key={props.api_key}
                            bg_color={props.bg_color}
                            text_color={props.text_color}
                            />
                        )}
                    else {
                    return (
                        <p>Oops! Something's wrong.</p>
                    )
                }
                })()  
            } 

          </>
        );

    }    

  




