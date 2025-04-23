window.H5PIntegration = {
    baseUrl: '/',
    url: '/assets/h5p-content',
    contentUrl: '/assets/h5p-content',
    contentPath: '/assets/h5p-content',
    libraryUrl: '/assets/h5p-content',
    postUserStatistics: true,
    ajax: {
      setFinished: '/h5p/ajax/setFinished',
      contentUserData: '/h5p/ajax/contentUserData/:contentId/:dataType/:subContentId?token=:token'
    },
    user: {
      name: 'Anonymous',
      mail: ''
    },
    siteUrl: '/',
    l10n: {
      H5P: {
        fullscreen: 'ขยายเต็มจอ',
        exitFullscreen: 'ออกจากโหมดเต็มจอ',
        download: 'ดาวน์โหลด',
        copyright: 'ลิขสิทธิ์',
        embed: 'ฝัง',
        size: 'ขนาด',
        showAdvanced: 'แสดงตัวเลือกขั้นสูง',
        hideAdvanced: 'ซ่อนตัวเลือกขั้นสูง',
        advancedHelp: 'ต้องการความช่วยเหลือ?'
      }
    },
    hubIsEnabled: false,
    reportingIsEnabled: true,
    saveFreq: false,
    libraryConfig: {}
  };
  