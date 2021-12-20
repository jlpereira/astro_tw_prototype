import GalleryAstro from '../packages/Gallery'
import Nomenclature from '../packages/Nomenclature'

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
