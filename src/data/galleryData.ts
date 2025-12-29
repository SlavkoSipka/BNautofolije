const categories = [
  { id: 'all', name: 'Sve' },
  { id: 'tinting', name: 'Zatamnjivanje' },
  { id: 'wrapping', name: 'Folije' }
];

const galleryItems = [
  {
    id: 28,
    category: 'wrapping',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740754699/Nenaslovljeni_dizajn_3_oazsaf.png',
    title: 'Kompletno presvlačenje',
    description: 'Lamborghini',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/v1740754669/IMG_4942_byitay.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/v1740754675/IMG_4955_hsyp9l.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/v1740754674/IMG_4954_myz3o2.jpg'
    ]
  },
  {
    id: 26,
    category: 'wrapping',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740753647/e8ea2380-bca1-412f-9348-c2c94e927cfa_itpwcq.jpg',
    title: 'Kompletno presvlačenje',
    description: 'Ferrari',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/v1740753553/4808a660-e0c9-42b8-bb06-b08241beebec_lhrkxd.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/v1740753553/17e72779-544a-4140-87b0-051bb72af2a3_wz1pob.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/v1740753553/af093b73-9880-47c5-a4ba-8cac8b2da1ca_muuzlo.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/v1740753553/1de2e251-4c84-4d0a-975e-98046a1afce9_jq6do8.jpg'
    ]
  },
  {
    id: 25,
    category: 'tinting',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740615632/IMG_4689_s4fxbh.jpg',
    title: 'Zatamnjivanje stakala',
    description: 'Audi',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740615637/IMG_4690_dmvf9z.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740615633/IMG_4691_rqxmwl.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740615639/IMG_4688_omp0yw.jpg'
    ]
  },


  {
    id: 22,
    category: 'wrapping',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614293/IMG_1770_selqwd.jpg',
    title: 'Kompletno presvlačenje',
    description: 'Golf',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614287/IMG_1771_iu3ndg.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614285/IMG_1773_gcaxon.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614292/IMG_1769_eogozp.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614285/IMG_1773_gcaxon.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614291/IMG_1838_qsl1fi.jpg'
    ]
  },
  {
    id: 21,
    category: 'wrapping',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614192/IMG_5560_kg4xke.jpg',
    title: 'Kompletno presvlačenje',
    description: 'Jeep',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614201/IMG_5562_zcnnwd.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614195/IMG_5571_bvypxw.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614196/IMG_5572_ct10u6.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614203/IMG_5565_j4uqwp.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614197/IMG_5563_v02vcb.jpg'
    ]
  },
  {
    id: 20,
    category: 'tinting',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614135/IMG_4320_-_Copy_acdi1d.jpg',
    title: 'Zatamnjivanje stakala',
    description: 'Renault',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614134/IMG_4321_-_Copy_rmihzg.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614131/IMG_4319_-_Copy_azbutb.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614139/IMG_4318_-_Copy_p3hq8q.jpg'
    ]
  },
  {
    id: 19,
    category: 'tinting',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614094/IMG_4351_evlrmg.jpg',
    title: 'Zatamnjivanje stakala',
    description: 'BMW',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614097/IMG_4349_itjzig.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614095/IMG_4352_hvvmnh.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614096/IMG_4350_e2tnmx.jpg'
    ]
  },
  {
    id: 18,
    category: 'tinting',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614013/IMG_5768_pzbvpt.jpg',
    title: 'Zatamnjivanje stakala',
    description: 'Audi',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614015/IMG_5769_ucpcso.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614018/IMG_5770_jbmzlw.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740614012/IMG_5771_mkwom4.jpg'
    ]
  },
  {
    id: 17,
    category: 'tinting',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740613969/IMG_4867_bzwau6.jpg',
    title: 'Zatamnjivanje stakala',
    description: 'Mercedes',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740613973/IMG_4869_ftwqii.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740613969/IMG_4866_pw38kn.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740613968/IMG_4865_o7bmay.jpg'
    ]
  },
  {
    id: 16,
    category: 'tinting',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612695/IMG_4890_a3iwdp.jpg',
    title: 'Zatamnjivanje stakala',
    description: 'Volkswagen',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612694/IMG_4889_gnln2o.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612698/IMG_4888_marxvi.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612697/IMG_4891_owgnte.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612700/IMG_4895_biw26r.jpg'
    ]
  },
  {
    id: 15,
    category: 'wrapping',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612340/IMG_4051_tqsuu6.jpg',
    title: 'Kompletno presvlačenje',
    description: 'Peugeot',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612334/IMG_4054_k2xnal.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612338/IMG_4046_cnmu7p.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612332/IMG_4056_drkxm1.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612337/IMG_4061_ghtlob.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612335/IMG_4058_p65gza.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612330/IMG_4059_vmcrzu.jpg'
    ]
  },
  {
    id: 14,
    category: 'wrapping',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612008/IMG_5175_bvafre.jpg',
    title: 'Kompletno presvlačenje',
    description: 'Audi',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612010/IMG_5176_enlcsq.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612012/IMG_5179_tbqaek.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612010/IMG_5176_enlcsq.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612002/IMG_5188_los88b.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740612000/IMG_5186_hqfpxk.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740611998/IMG_5183_u6ame2.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740611996/IMG_5182_c4hdte.jpg'
    ]
  },
  {
    id: 13,
    category: 'wrapping',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740754199/Nenaslovljeni_dizajn_jzqqdp.png',
    title: 'Kompletno presvlačenje',
    description: 'BMW',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/v1740754198/Nenaslovljeni_dizajn_1_dkmjcm.png',
      'https://res.cloudinary.com/daf91w2yr/image/upload/v1740754199/Nenaslovljeni_dizajn_2_rrssvi.png'
    ]
  },
  {
    id: 12,
    category: 'tinting',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740611077/IMG_0826_o467oq.jpg',
    title: 'Zatamnjivanje stakala',
    description: 'Volkswagen',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740611076/IMG_0823_b9pz2l.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740611079/IMG_0825_d41tru.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740611078/IMG_0824_rhxx1u.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740611083/IMG_0827_cu5nvx.jpg'
    ]
  },
  {
    id: 11,
    category: 'tinting',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740611014/IMG_3259_i1jwso.jpg',
    title: 'Zatamnjivanje stakala',
    description: 'BMW',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740611014/IMG_3260_dpbgof.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740611015/IMG_3263_hlxkwj.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740611012/IMG_3258_ubmadd.jpg'
    ]
  },
  {
    id: 10,
    category: 'tinting',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740610998/IMG_3295_ffjh5g.jpg',
    title: 'Zatamnjivanje stakala',
    description: 'BMW',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740610993/IMG_3293_pbtdfi.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740610992/IMG_3299_w2wjze.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740610996/IMG_3292_f850yb.jpg'
    ]
  },
  {
    id: 9,
    category: 'wrapping',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740610436/IMG_1338_abukoe.jpg',
    title: 'Kompletno presvlačenje',
    description: 'Audi',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740610439/IMG_1339_rmyzr3.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740610437/IMG_1340_iruroj.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740610440/IMG_1336_nndpvw.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740610436/IMG_1353_pjrgrv.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740610435/IMG_1354_un300n.jpg'
    ]
  },
  {
    id: 8,
    category: 'wrapping',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740609790/IMG_0560_h01zc5.jpg',
    title: 'Kompletno presvlačenje',
    description: 'Audi',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740609821/IMG_0561_tfqc2q.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740609832/IMG_0563_wvexbw.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740609791/IMG_0559_n1anad.jpg'
    ]
  },
  {
    id: 1,
    category: 'wrapping',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740605844/IMG_4877_z8okgq.jpg',
    title: 'Kompletno Presvlačenje',
    description: 'Maserati',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740605844/IMG_4881_v5iw8h.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740605843/IMG_4888_rzlzqg.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740606087/IMG_4880_suit05.jpg'
    ]
  },
  {
    id: 2,
    category: 'wrapping',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740606758/IMG_9483_hmmqm2.jpg',
    title: 'Kompletno presvlačenje',
    description: 'Porsche',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740606757/IMG_9488_bcuga9.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740606757/IMG_9486_wjrmtn.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740606757/IMG_9484_vffedx.jpg'
    ]
  },
  {
    id: 4,
    category: 'tinting',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740607377/IMG_7206_k6hnyx.jpg',
    title: 'Zatamnjivanje stakala',
    description: 'Audi',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740607376/IMG_7205_v49zux.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740607377/IMG_7208_zcx0gz.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740607376/IMG_7209_yg5pkn.jpg'
    ]
  },
  {
    id: 5,
    category: 'tinting',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740607724/IMG_2800_fmrkou.jpg',
    title: 'Zatamnjivanje Stakala',
    description: 'Golf',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740607724/IMG_2802_ivs8pd.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740607724/IMG_2801_pjourq.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740607725/IMG_2798_bilfzj.jpg'
    ]
  },
  {
    id: 6,
    category: 'tinting',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740608227/IMG_1710_oidvcr.jpg',
    title: 'Zatamnjivanje stakala',
    description: 'Mercedes',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740608229/IMG_1711_eh91zn.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740608232/IMG_1712_cncq7f.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740608229/IMG_1711_eh91zn.jpg'
    ]
  },
  {
    id: 7,
    category: 'wrapping',
    image: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740608667/IMG_1668_iswp3x.jpg',
    title: 'Kompletno presvlačenje',
    description: 'Audi',
    additionalImages: [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740608676/IMG_1665_jy9w5w.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740608664/IMG_1673_wiu7v6.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740608669/IMG_1671_mjdn99.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740608676/IMG_1665_jy9w5w.jpg'
    ]
  }
];

export { categories, galleryItems }