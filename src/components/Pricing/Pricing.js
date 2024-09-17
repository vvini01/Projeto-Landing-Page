import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

 const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Nossos Serviços</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter</PricingCardPlan>
                <PricingCardCost>R$99,99</PricingCardCost>
                <PricingCardLength>Mensal</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 Novos Usuários</PricingCardFeature>
                  <PricingCardFeature>R$10,000 total</PricingCardFeature>
                  <PricingCardFeature>Análise de Leads</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escolher um Plano</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Ouro</PricingCardPlan>
                <PricingCardCost>R$299.99</PricingCardCost>
                <PricingCardLength>Mensal</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 Novos Usuários</PricingCardFeature>
                  <PricingCardFeature>R$50,000 total</PricingCardFeature>
                  <PricingCardFeature>Análise de Leads</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escolher Plano</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamante</PricingCardPlan>
                <PricingCardCost>R$999,99</PricingCardCost>
                <PricingCardLength>Mensal</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Usuários Ilimitados</PricingCardFeature>
                  <PricingCardFeature>Ilimitado</PricingCardFeature>
                  <PricingCardFeature>24/7 Suporte</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escolher Plano</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing