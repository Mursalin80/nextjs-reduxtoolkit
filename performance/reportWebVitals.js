export function reportWebVitals(metric) {
  // The metric object ({ id, name, startTime, value, label }) is logged to the console
  if (metric.label === 'web-vital') {
    console.log(metric);
  }

  // The metric object ({ id, name, startTime, value, label }) is logged to the console
  if (metric.label === 'custom') {
    console.log(metric);
  }
  // switch (metric.name) {
  //   case 'FCP':
  //     // handle FCP results
  //     break;
  //   case 'LCP':
  //     // handle LCP results
  //     break;
  //   case 'CLS':
  //     // handle CLS results
  //     break;
  //   case 'FID':
  //     // handle FID results
  //     break;
  //   case 'TTFB':
  //     // handle TTFB results
  //     break;
  //   case 'INP':
  //     // handle INP results (note: INP is still an experimental metric)
  //     break;
  //   default:
  //     break;
  // }

  // switch (metric.name) {
  //   case 'Next.js-hydration':
  //     // handle hydration results
  //     break
  //   case 'Next.js-route-change-to-render':
  //     // handle route-change to render results
  //     break
  //   case 'Next.js-render':
  //     // handle render results
  //     break
  //   default:
  //     break
  // }

  window.gtag('event', name, {
    event_category:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
  console.log(metric);
}
