import * as S from "./styles";

import { HomeBanner } from "./HomeBanner";
import { HomeMenu } from "./HomeMenu";
import { HomeTrailOffer } from "./HomeTrailOffer";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useGetBanners } from "./hooks/get-banners";
import { useGetTrailOffers } from "./hooks/get-trail-offers";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { data: banners } = useGetBanners();
  const { data: trailOffers } = useGetTrailOffers();
  const [index, setIndex] = useState(0);
  const banner = banners?.[index] || null;
  const { t } = useTranslation();

  return (
    <>
      <S.Container>
        <S.Unscrollable />
        <S.Header>
          <Link to="/login">
            <S.Logo src="/max.webp" alt="Ada Max" />
          </Link>
          <S.Menu>
            <S.MenuItem $active>{t("home.home")}</S.MenuItem>
            <S.MenuItem>Series</S.MenuItem>
            <S.MenuItem>{t("home.movies")}</S.MenuItem>
            <S.MenuItem>
              <img src="/hbo.webp" width={32} />
            </S.MenuItem>
            <S.MenuItem>{t("home.kidFamily")}</S.MenuItem>
          </S.Menu>
          <HomeMenu />
        </S.Header>

        <S.Banner>
          {banner ? <HomeBanner banner={banner} /> : null}
          <S.BannerDots>
            {banners?.map((banner, idx) => (
              <span
                key={banner.id}
                onClick={() => setIndex(idx)}
                className={clsx({
                  active: idx === index,
                })}
              ></span>
            ))}
          </S.BannerDots>
        </S.Banner>
        <S.Offers>
          {trailOffers?.map((trailOffer) => {
            return (
              <HomeTrailOffer
                key={trailOffer.offerId}
                trailOffer={trailOffer}
              />
            );
          })}
        </S.Offers>
      </S.Container>
    </>
  );
};
