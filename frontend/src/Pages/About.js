import React from 'react';
import PageTitle from '../Components/PageTitle';
import AboutMain from '../Components/AboutMain';
import WhatWeDo from '../Components/WhatWeDo';
import VisionMision from '../Components/VisionMision'; 
import AboutCertificate from '../Components/AboutCertificate';
import useFetch from '../hooks/useFetch.js';

function About() {
  const { data, loading, error, api } = useFetch(
    '/about-page?populate=WhoAreWe.Image&populate=WhatWeDo.Image&populate=VissionMissionArge.VissionMissionImage&populate=VissionMissionArge.ArgeImage&populate=Certificate.Image'
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const aboutMainData = {
    title: data.WhoAreWe?.Title || "Başlık Bulunamadı",
    subtitle: data.WhoAreWe?.Subtitle || "Alt Başlık Bulunamadı",
    description: data.WhoAreWe?.Description?.[0]?.children?.[0]?.text || "Açıklama bulunamadı.",
    image: `${api}${data.WhoAreWe?.Image?.url || ''}`,
    imageAlt: data.WhoAreWe?.Image?.alternativeText || data.WhoAreWe?.Title,
  };

  const whatWeDoData = {
    title: data.WhatWeDo?.Title || "Başlık Bulunamadı",
    description1: data.WhatWeDo?.Description1?.[0]?.children?.[0]?.text || "Açıklama 1 bulunamadı.",
    description2: data.WhatWeDo?.Description2?.[0]?.children?.[0]?.text || "Açıklama 2 bulunamadı.",
    image: `${api}${data.WhatWeDo?.Image?.[0]?.url || ''}`,
    imageAlt: data.WhatWeDo?.Image?.[0]?.alternativeText || data.WhatWeDo?.Title,
  };

  const visionMisionData = {
    title: data.VissionMissionArge?.VissionMissionTitle || "Vizyonumuz & Misyonumuz",
    description: data.VissionMissionArge?.VissionMissionDescription?.map(
      (desc) => desc.children?.[0]?.text
    ).filter(Boolean) || [],
    argeTitle: data.VissionMissionArge?.ArgeTitle || "ARGE Çalışmalarımız",
    argeDescription: data.VissionMissionArge?.ArgeDescription?.map(
      (desc) => desc.children?.[0]?.text
    ).filter(Boolean) || [],
    vissionMissionImage: `${api}${data.VissionMissionArge?.VissionMissionImage?.url || ''}`,
    argeImage: `${api}${data.VissionMissionArge?.ArgeImage?.url || ''}`,
  };

  const aboutCertificateData = data.Certificate?.map((certificate) => ({
    img: `${api}${certificate.Image?.url}`,
    title: certificate.Title,
  })) || [];

  return (
    <>
      <PageTitle title="Hakkımızda"/>
      <AboutMain aboutMainData={aboutMainData} />
      <WhatWeDo whatWeDoData={whatWeDoData} />
      <VisionMision visionMisionData={visionMisionData} />
      <AboutCertificate aboutCertificateData={aboutCertificateData} />
    </>
  );
}

export default About;
