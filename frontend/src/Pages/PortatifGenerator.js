import PageTitle from '../Components/PageTitle';
import GeneratorTab from '../Components/GeneratorTab';
import useFetch from '../hooks/useFetch';

const PortatifGeerator = () => {
  const { data, loading, error, api } = useFetch(
    "/generator-page?populate=PortableGenerator.TabImage&populate=PortableGenerator.TableRows&populate=PortableGenerator.TableRows.Image"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const PortableGenerator = data.PortableGenerator || [];

  const tabs = PortableGenerator.map((tab) => ({
    key: tab.TabKey,
    label: tab.TabName,
    image: `${api}${tab.TabImage.url}`,
  }));

  const tableData = PortableGenerator.reduce((acc, tab) => {
    acc[tab.TabKey] = tab.TableRows.map((row) => ({
      id: row.id,
      model: row.Model,
      yedekGuc: row.YedekGuc,
      birincilGuc: row.BirincilGuc,
      hz: row.Hz,
      katalogLink: row.KatalogLink,
      detayLink: row.DetayLink,
      content: row.Content,
      image: row.Image?.url ? `${api}${row.Image.url}` : "",
    }));
    return acc;
  }, {});
  

  return (
    <>
      <PageTitle title="Portatif Jeneratör Setleri" />
      <GeneratorTab tabs={tabs} tableData={tableData} />
    </>
  );
};

export default PortatifGeerator;
