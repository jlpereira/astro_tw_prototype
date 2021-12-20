import GalleryAstro from '../packages/Gallery/Gallery.astro'
import Nomenclature from '../packages/Nomenclature/Nomenclature.astro'

export default [
    {
      component: GalleryAstro,
      props: {
        params: ['otu_id']
      },
    },
    {
      component: Nomenclature,
      props: {
        params: ['taxon_name_id']
      },
    }
  ]
