import { timeline } from '../../../static/data/dashHome.data';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Events() {
  return (
    <div className='flow-root bg-white px-4 py-5 border-b border-gray-200 sm:px-6'>
      <div className='bg-white mb-5 py-3 border-b border-gray-200 sm:px-6'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>
          Recent events
        </h3>
      </div>
      <ul role='list' className='-mb-8'>
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className='relative pb-8'>
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                  aria-hidden='true'
                />
              ) : null}
              <div className='relative flex space-x-3'>
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon
                      className='h-5 w-5 text-white'
                      aria-hidden='true'
                    />
                  </span>
                </div>
                <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                  <div>
                    <p className='text-sm text-gray-500'>
                      {event.content}
                      <a
                        href={event.href}
                        className='font-medium text-gray-900'
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
