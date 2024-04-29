/* eslint-disable */
function wasapiWidgetInit(settings) {
  const existWasapiWidget = document.getElementById('wasapi-widget-container');
  if(existWasapiWidget) existWasapiWidget.remove();
  const option = { ...{
      active: 1,
      phone: '',
      country_code: '',
      sentPhone: '',
      userMessage: '',
      customer: '',
      mainButton: {
        position: 'right', // left, right
        marginBottom: 100,
        borderRadius: 25, // max 25
        text: '',
        marginLeft: 50,
        marginRight: 50,
        backgroundColor: '#4dc247',
      },
      chatCard: {
        show: 1,
        backgroundColor: '#4dc247',
        borderRadius: 0, // max 25
        avatarUrl: '',
        title: '',
        subtitle: '',
        messageTitle: '',
        messageContent: '',
        sendButtonText: '',
      },
    }, ...settings }
  const elementContainer = document.createElement("div")
  elementContainer.innerHTML = `<div id="wasapi-widget-container">
    <div id="wasapi-widget-button" class="wasapi-widget-general-align">
      <img src="https://app.wasapi.io/cdn/whatsapp-icon.svg" width="35" height="35" id="wasapi-widget-icon" />
      <div id="wasapi-widget-button-text">${option.mainButton.text}</div>
    </div>
    <div id="wasapi-widget-chat-card" class="wasapi-widget-general-align">
      <div id="wasapi-widget-chat-card-pre-header">
        <div class="wasapi-widget-chat-card-by">
          powred by
          <a
            href="https://github.com/Wilsmac"
            target="_blank"
            class="wasapi-widget-chat-card-by-link"
          >
            nobody
          </a>
        </div>
      </div>
      <div id="wasapi-widget-chat-card-header">
        <img
          id="wasapi-widget-chat-card-header-avatar"
          src="${option.chatCard.avatarUrl || 'imageb'}"
        />
        <div class="wasapi-widget-chat-card-header-content">
          <div id="wasapi-widget-chat-card-header-content-title">
            ${option.chatCard.title}
          </div>
          <div id="wasapi-widget-chat-card-header-content-subtitle">
            ${option.chatCard.subtitle}
          </div>
        </div>
        <div id="wasapi-widget-chat-card-header-close-btn">
          <img
            src="https://app.wasapi.io/cdn/close-icon.svg"
            width="26"
            height="26"
            style="display: table-row"
          />
        </div>
      </div>

      <div id="wasapi-widget-chat-card-content">
        <div class="wasapi-widget-chat-card-content-message">
          <span class="wasapi-widget-chat-card-content-message-tail">
            <svg viewBox="0 0 24 39" height="39" width="24" x="0px" y="0px">
              <path
                opacity="0.13"
                fill="#0000000"
                d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
              />
              <path
                fill="currentColor"
                d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
              />
            </svg>
          </span>
          <div id="wasapi-widget-chat-card-content-message-title">
            ${option.chatCard.messageTitle}
          </div>
          <div id="wasapi-widget-chat-card-content-message-message">
            ${option.chatCard.messageContent}
          </div>
        </div>
        <div id="wasapi-widget-chat-card-footer">
          <a
            role="button"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=${option.sentPhone.replace(/\+/g, "")}&text=${option.userMessage || ''}"
            title="WhatsApp"
            id="wasapi-widget-chat-card-footer-send-btn"
          >
            <img src="https://app.wasapi.io/cdn/whatsapp-icon.svg" width="26" height="26" />
            <span id="wasapi-widget-chat-card-footer-send-btn-text">
              ${option.chatCard.sendButtonText}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>`
  document.body.appendChild(elementContainer)

  const styleSection = `#wasapi-widget-container {
  display: ${option.active ? 'block' : 'none'}
}

#wasapi-widget-button {
  margin: 0 0 ${option.mainButton.marginBottom}px 0 !important;
  padding-left: ${option.mainButton.text ? '20' : '0'}px;
  padding-right: ${option.mainButton.text ? '20' : '0'}px;
  z-index: 99999999 !important;
  text-align: center !important;
  height: 50px;
  bottom: 0 !important;
  position: fixed !important;
  min-width: 50px;
  border-radius: ${option.mainButton.borderRadius}px;
  transition: none !important;
  visibility: visible;
  background-color: ${option.mainButton.backgroundColor};
  cursor: pointer;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  align-items: center;
  display: flex;
  justify-content: center;
  font: 700 normal 18px/1.3 -apple-system, BlinkMacSystemFont, Roboto, Open Sans,
    Helvetica Neue, sans-serif;
}

#wasapi-widget-icon {
  margin-left: ${option.mainButton.text ? '0' : '4'}px;
  margin-bottom: ${option.mainButton.text ? '0' : '2'}px;
}

.wasapi-widget-general-align {
${
    option.mainButton.position === 'left'
      ? 'left : ' + option.mainButton.marginLeft + 'px'
      : 'right : ' + option.mainButton.marginRight + 'px'
  };
}

#wasapi-widget-button-text {
  color: white;
  font-size: 18px;
  margin-left: 4px;
}

#wasapi-widget-chat-card {
  position: fixed !important;
  width: 360px;
  margin-bottom: 60px;
  bottom: ${option.mainButton.marginBottom}px !important;
  border-radius: ${option.chatCard.borderRadius}px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  font: 400 normal 15px/1.3 -apple-system, BlinkMacSystemFont, Roboto, Open Sans,
    Helvetica Neue, sans-serif;
  background-color: #eae6df;
  z-index: 99999999 !important;
}

#wasapi-widget-chat-card-pre-header {
  background-color: ${option.chatCard.backgroundColor};
  border-radius: ${option.chatCard.borderRadius}px ${option.chatCard.borderRadius}px 0 0;
  padding: 10px 20px 0 20px;
}

.wasapi-widget-chat-card-by {
  font-style: italic;
  text-align: start;
  font-size: 12px;
  color: lightgray;
  font-weight: bold;
}

.wasapi-widget-chat-card-by-link {
  color: #ffffff !important;
  text-decoration: underline !important;
}

#wasapi-widget-chat-card-header {
  max-height: 90px;
  min-height: 66px;
  height: 66px;
  background-color: ${option.chatCard.backgroundColor};
  display: flex;
  align-items: center;
  color: white;
}

#wasapi-widget-chat-card-header-avatar {
  margin-left: 20px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  border-radius: 25px;
  height: 50px;
  width: 50px;
}

.wasapi-widget-chat-card-header-content {
  margin-left: 14px;
  margin-right: 14px;
  width: auto;
  overflow: auto;
}

#wasapi-widget-chat-card-header-content-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 20px;
  font-size: 16px;
  font-weight: 700;
}
#wasapi-widget-chat-card-header-content-subtitle {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
  font-size: 13px;
  margin-top: 4px;
}

#wasapi-widget-chat-card-header-close-btn {
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 12px;
  width: 40px;
  height: 40px;
  padding-top: 8px;
  padding-left: 7px;
}

#wasapi-widget-chat-card-header-close-btn:hover {
  border-radius: 25px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.3);
}

#wasapi-widget-chat-card-content {
  background: url('https://app.wasapi.io/cdn/bg-whatsapp.png') repeat;
  border-radius: 0 0 ${option.chatCard.borderRadius}px ${option.chatCard.borderRadius}px;
}
.wasapi-widget-chat-card-content-message {
  background-color: white;
  padding: 10px;
  margin: 20px;
  position: relative;
  display: inline-block;
  border-radius: 0 10px 10px 10px;
}

.wasapi-widget-chat-card-content-message-tail {
position: absolute;
  top: 0;
  left: -8px;
  color: #ffffff;
  z-index: 100;
  width: 8px;
  height: 13px;
}

#wasapi-widget-chat-card-content-message-title {
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.6);
}
#wasapi-widget-chat-card-content-message-message {
  font-size: 14px;
  line-height: 19px;
  margin-top: 4px;
  color: rgb(17, 17, 17);
}

#wasapi-widget-chat-card-footer {
  background-color: rgba(17, 17, 17, 0.2);
  padding: 10px 20px;
  border-radius: 0 0 ${option.chatCard.borderRadius}px ${option.chatCard.borderRadius}px;
}

#wasapi-widget-chat-card-footer-send-btn {
border-radius: ${option.mainButton.borderRadius}px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background-color: ${option.mainButton.backgroundColor}!important;
  text-decoration: none;
  color: rgb(255, 255, 255) !important;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-appearance: none;
  padding: 8px 12px;
  overflow: hidden;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  position: relative;
  display: flex;
}

#wasapi-widget-chat-card-footer-send-btn:hover {
  box-shadow: 2px 2px 6px rgba(255, 255, 255, 0.3);
}

#wasapi-widget-chat-card-footer-send-btn-text {
  margin-left: 8px;
  margin-right: 8px;
  z-index: 1;
  color: rgb(255, 255, 255);
}

@media only screen and (max-width: 500px) {
  #wasapi-widget-chat-card {
      width: auto;
      position: fixed !important;
      right: 20px!important;
      left: 20px!important;
  }

  .wasapi-widget-general-align {
  ${
      option.mainButton.position === 'left'
        ? 'left : 0px !important;'
        : 'right : 0px !important;'
    };
  }
}
`;

  const styleElement = document.createElement("style");
  styleElement.textContent = styleSection;
  document.getElementsByTagName("head")[0].appendChild(styleElement);

  const wasapiWidgetMainBtn = document.getElementById('wasapi-widget-button')
  const wasapiWidgetCloseBtn = document.getElementById(
    'wasapi-widget-chat-card-header-close-btn'
  )
  const wasapiWidgetChatCard = document.getElementById(
    'wasapi-widget-chat-card'
  )
  wasapiWidgetChatCard.style.display = option.chatCard.show ? 'block' : 'none'

  wasapiWidgetMainBtn.addEventListener('click', function () {
    wasapiWidgetChatCard.style.display = 'block'
  })
  wasapiWidgetCloseBtn.addEventListener('click', function () {
    wasapiWidgetChatCard.style.display = 'none'
  })
}