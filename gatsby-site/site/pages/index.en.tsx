import React from 'react'
import SEO from '@antv/gatsby-theme-antv/site/components/Seo'
import Banner from '@antv/gatsby-theme-antv/site/components/Banner'
import Features from '@antv/gatsby-theme-antv/site/components/Features'
import BannerSVG from '@antv/gatsby-theme-antv/site/components/BannerSVG'
import './index.zh.less'
const IndexPage = () => {
  // 测试

  const features = [
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/5dbaf094-c064-4a0d-9968-76020b9f1510.svg',
      title: '简单方便',
      description: '从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。',
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/0a0371ab-6bed-41ad-a99b-87a5044ba11b.svg',
      title: '方便可靠',
      description:
        '大量产品实践之上，提供绘图引擎、完备图形语法，专业设计规范。',
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/716d0bc0-e311-4b28-b79f-afdd16e8148e.svg',
      title: '无限可能',
      description: '任何图表，都可以基于图形语法灵活绘制，满足你无限的创意。',
    },
  ]

  const bannerButtons = [
    {
      text: '图表示例',
      link: '#features',
      type: 'primary',
    },
  ]
  return (
    <>
      <SEO title={'蚂蚁数据可视化'} lang="zh" />
      <Banner
        // coverImage={coverImage}
        coverImage={<BannerSVG />}
        title={'让数据栩栩如生'}
        description={
          'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。'
        }
        className="banner"
        buttons={bannerButtons}
        showGithubStars={false}
      />
      <Features
        id="features"
        features={features}
        title="我们的优势"
        style={{ width: '100%' }}
      />
    </>
  )
}

export default IndexPage
