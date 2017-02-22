$(document)['ready'](function() {
    $['fn']['bootstrapSwitch']['defaults']['onColor'] = 'success';
    $('#aesInput')['bootstrapSwitch']();
    var _0xd05bx1 = $(window)['width']();
    $('nav ul .normal-menu a, .scroll-link')['click'](function() {
        $('html, body')['animate']({
            scrollTop: $($['attr'](this, 'href'))['offset']()['top'] - 30
        }, 500);
        return false;
    });
    $('.mobile-menu')['click'](function() {
        $('.normal-menu')['fadeToggle']()
    });
    var _0xd05bx2 = ['E8VHK-FQA4J-2DH9D-FJHDX-XXXXX', 'GDZ2T-TW8X2-4XS7V-DH9TC-XXXXX', 'YCGJX-9MRCP-F4KR3-8P4VX-XXXXX', 'FCB8J-J2W27-TTRF6-JGFTJ-XXXXX', 'RKXTY-YCB6C-46HY4-CQKYM-XXXXX', 'V8XDR-7MDDX-2QMD4-MWVFM-XXXXX', 'WYYQB-Q2VDH-497F6-79VBQ-XXXXX', 'VXD4M-3QCFR-YHB83-24MY6-XXXXX', 'VF2P9-VTDJW-Y2CDK-TG6VH-XXXXX', 'WV8GF-3MY8B-QXKHY-BDXTW-XXXXX', 'QFQCW-C9TWH-MQQXQ-4BRJ8-XXXXX', 'WKD4D-83VCT-8W7QP-TKXTG-XXXXX', 'CFCCH-FMYJW-PM8P3-RY9XM-XXXXX', 'TDMCB-PKCQJ-R9D32-QX3RD-XXXXX'];

    function _0xd05bx3() {
        $random_number = Math['floor'](Math['random']() * _0xd05bx2['length']);
        $('.generated_code p')['html'](_0xd05bx2[$random_number]);
    }
    _0xd05bx3();
    var _0xd05bx4 = false;
    var _0xd05bx5 = 'NONE';
    var _0xd05bx6 = 'NONE';
    $('.connect-button')['click'](function(_0xd05bx7) {
        if (_0xd05bx4 == false) {
            if ($('#usernameInput')['val']() != '') {
                if ($('#deviceInput')['val']() != '') {
                    $('#m-accname')['text']($('#usernameInput')['val']());
                    $('#m-device')['text']($('#deviceInput')['val']());
                    $['magnificPopup']['open']({
                        items: {
                            src: '#loading_modal'
                        },
                        type: 'inline',
                        preloader: false,
                        modal: true,
                        callbacks: {
                            open: function() {
                                _0xd05bxc(function() {
                                    console['log']('progress_done');
                                    _0xd05bx4 = true;
                                    $('#gen_section')['removeClass']('inactive');
                                    $('.connected_msg')['css']('display', 'block');
                                    $('#usernameInput, #deviceInput, #aesInput')['attr']('disabled', 'true');
                                    $['magnificPopup']['close']();
                                    sweetAlert('Success', 'Account ' + $('#usernameInput')['val']() + ' has been successfully connected.', 'success');
                                })
                            },
                            close: function() {
                                console['log']('closed')
								$('html, body')['animate']({
									scrollTop: $('#gen_section')['offset']()['top'] - 30
								}, 1000);
                            }
                        }
                    });
                } else {
                    sweetAlert('Error', 'Please select your server.', 'error')
                }
            } else {
                sweetAlert('Error', 'Please enter your username.', 'error')
            }
        } else {
            sweetAlert('Error', 'You are already connected.', 'error')
        }
    });

    function _0xd05bx8(_0xd05bx9, _0xd05bxa) {
        var _0xd05bxb;
        for (i = 1; i <= 5; i++) {
            if ($('.' + _0xd05bxa + i)['hasClass']('activated')) {
                $('.' + _0xd05bxa + i)['removeClass']('activated')
            }
        };
        for (i = 1; i <= 5; i++) {
            if (_0xd05bx9['hasClass'](_0xd05bxa + i)) {
                _0xd05bxb = 'OPTION_' + i
            }
        };
        _0xd05bx9['addClass']('activated');
        return _0xd05bxb;
    }
    $('.gen-button')['click'](function() {
        if (_0xd05bx4 == true) {
            $('.generator-section')['fadeOut']('slow', function() {
                $('.gen-console-area')['fadeIn']('slow', function() {
                    _0xd05bx1d($('#usernameInput')['val'](), $('#deviceInput')['val'](), $('#lives_select')['val'](), $('#coins_select')['val'](), $('#bars_select')['val'](), function() {
                        console['log']('locker');
                        $['magnificPopup']['open']({
                            items: {
                                src: '#gen_modal'
                            },
                            type: 'inline',
                            preloader: false,
                            modal: true,
                            callbacks: {
                                open: function() {}
                            }
                        });
                    });
                    $('html, body')['animate']({
                        scrollTop: $('#gen_section')['offset']()['top'] - 30
                    }, 1000);
                })
            })
        } else {
            sweetAlert('Error', 'Please connect to your account.', 'error')
        }
    });

    function _0xd05bxc(_0xd05bxd) {
        var _0xd05bxe = 0;
        var _0xd05bxf = $('.connect_progressbar');
        _0xd05bxf['css']('width', '0%');
        var _0xd05bx10 = setInterval(function() {
            if (_0xd05bxe == 0) {
                _0xd05bxe = 20;
                _0xd05bxf['css']('width', _0xd05bxe + '%');
            } else {
                if (_0xd05bxe == 20) {
                    _0xd05bxe = 35;
                    _0xd05bxf['css']('width', _0xd05bxe + '%');
                } else {
                    if (_0xd05bxe == 35) {
                        _0xd05bxe = 65;
                        _0xd05bxf['css']('width', _0xd05bxe + '%');
                    } else {
                        if (_0xd05bxe == 65) {
                            _0xd05bxe = 75;
                            _0xd05bxf['css']('width', _0xd05bxe + '%');
                        } else {
                            if (_0xd05bxe == 75) {
                                _0xd05bxe = 85;
                                _0xd05bxf['css']('width', _0xd05bxe + '%');
                            } else {
                                if (_0xd05bxe == 85) {
                                    _0xd05bxe = 89;
                                    _0xd05bxf['css']('width', _0xd05bxe + '%');
                                } else {
                                    if (_0xd05bxe == 89) {
                                        _0xd05bxe = 100;
                                        _0xd05bxf['css']('width', _0xd05bxe + '%');
                                    } else {
                                        if (_0xd05bxe == 100) {
                                            _0xd05bxd();
                                            clearInterval(_0xd05bx10);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, Math['floor']((Math['random']() * 1200) + 600));
    }
    var _0xd05bx11 = $('.gen-dev-console');
    var _0xd05bx12 = $('.dev-console-text');
    var _0xd05bx13 = _0xd05bx11['height']();

    function _0xd05bx14(_0xd05bx15, _0xd05bx16) {
        setTimeout(function() {
            var _0xd05bx17 = $('.gen-loading-msg');
            _0xd05bx17['html'](_0xd05bx15);
        }, _0xd05bx16)
    }

    function _0xd05bx18(_0xd05bx15, _0xd05bx16) {
        setTimeout(function() {
            var _0xd05bx19 = $('<li><i class="fa fa-angle-right"></i> ' + _0xd05bx15 + '</li>');
            _0xd05bx19['hide']()['appendTo'](_0xd05bx12)['fadeIn']();
            _0xd05bx11['animate']({
                scrollTop: _0xd05bx13
            }, 500);
            _0xd05bx13 += _0xd05bx11['height']();
        }, _0xd05bx16)
    }

    function _0xd05bx1a(_0xd05bx15, _0xd05bx16) {
        setTimeout(function() {
            var _0xd05bx19 = $('<li class="console-green-text"><i class="fa fa-angle-right"></i> ' + _0xd05bx15 + '</li>');
            _0xd05bx19['hide']()['appendTo'](_0xd05bx12)['fadeIn']();
            _0xd05bx11['animate']({
                scrollTop: _0xd05bx13
            }, 500);
            _0xd05bx13 += _0xd05bx11['height']();
        }, _0xd05bx16)
    }

    function _0xd05bx1b(_0xd05bx15, _0xd05bx16) {
        setTimeout(function() {
            var _0xd05bx19 = $('<li class="console-red-text"><i class="fa fa-angle-right"></i> ' + _0xd05bx15 + '</li>');
            _0xd05bx19['hide']()['appendTo'](_0xd05bx12)['fadeIn']();
            _0xd05bx11['animate']({
                scrollTop: _0xd05bx13
            }, 500);
            _0xd05bx13 += _0xd05bx11['height']();
        }, _0xd05bx16)
    }

    function _0xd05bx1c(_0xd05bx15, _0xd05bx16) {
        setTimeout(function() {
            var _0xd05bx19 = $('<li class="console-yellow-text"><i class="fa fa-angle-right"></i> ' + _0xd05bx15 + '</li>');
            _0xd05bx19['hide']()['appendTo'](_0xd05bx12)['fadeIn']();
            _0xd05bx11['animate']({
                scrollTop: _0xd05bx13
            }, 500);
            _0xd05bx13 += _0xd05bx11['height']();
        }, _0xd05bx16)
    }

    function _0xd05bx1d(_0xd05bx1e, _0xd05bx1f, _0xd05bx20, _0xd05bx21, _0xd05bx22, _0xd05bx23) {
        _0xd05bx18('Performing server authentication: connect_to_server(332FS2);', 0);
        _0xd05bx14('Successully obtained server status verification', 300);
        _0xd05bx1a('Response: Successfully authenticated secure server connection.', 750);
        _0xd05bx14('Importing files for encryption of user request', 1200);
        _0xd05bx18('Import: AES_256_Keys();', 1400);
        _0xd05bx18('Import: Open_SSL_Encryption();', 1600);
        _0xd05bx18('Import: Server_332FS2_Keychain();', 1880);
        _0xd05bx14('Importing of encryption files and methods completed', 2000);
        _0xd05bx1a('Response: All files were imported successfully.', 2400);
        _0xd05bx18('Retrieving form input information: kernel.forms.obtain_user_information();', 2670);
        _0xd05bx14('User HTTP request information has been obtained', 2900);
        _0xd05bx1a('Response: Obtained user form input information.', 3100);
        _0xd05bx1c('USERNAME: ' + _0xd05bx1e, 3400);
        _0xd05bx1c('DEVICE: ' + _0xd05bx1f, 3500);
        _0xd05bx1c('COINS_AMOUNT: ' + _0xd05bx20, 3500);
        _0xd05bx1c('POINTS_AMOUNT: ' + _0xd05bx21, 3500);
        _0xd05bx18('Injecting the information securely into encryption server: kernel.generator.start_process();', 4200);
        _0xd05bx14('User information is being encrypted', 4400);
        _0xd05bx18('Encrypting request: kernel.open_ssl_enc(' + _0xd05bx1e + ');', 4700);
        _0xd05bx14('User information encryption completed', 5000);
        _0xd05bx1a('Response: Successfully encrypted user request.', 5300);
        _0xd05bx1a('Encrypted Information: 608c4a1b463ec35ad0354c1edd5ae961add292b6675cbca8ac41d70d37d4e2a7dba2b', 5600);
        _0xd05bx18('Retrieving current PRS server script: read_PRS_server_source();', 6000);
        _0xd05bx14('Obtaining methods to create a backdoor into PRS server', 6100);
        _0xd05bx1a('Response: Successfully obtained current server script.', 6400);
        _0xd05bx1c('MD5 hash: 2c58b6d627de1c58cc4fda16e1037a08', 6900);
        _0xd05bx1c('Local IP address: 192.168.5.6', 7100);
        _0xd05bx1c('Current version: 2.320.23.1', 7200);
        _0xd05bx1c('Login server version: 1.32.4.5', 7300);
        _0xd05bx1c('Number external methods: 43267', 7400);
        _0xd05bx1c('Initialization method: kernel.cc_server.application.main.init();', 7600);
        _0xd05bx18('Injecting into main method: inject_ssl(kernel.cc_server.application.main.init);', 8000);
        _0xd05bx14('Processing orginal user request to confirm human source', 8250);
        _0xd05bx1a('Response: Successfully injected into PRS servers.', 8430);
        setTimeout(function() {
            $('.loading-spinner')['css']('border-left', '1.1em solid #29be62')
        }, 8900);
        _0xd05bx1a('Items generation successful.', 8900);
        _0xd05bx1a('Sending item to (' + _0xd05bx1e + ') from our server.', 8900);
        _0xd05bx1a('Initating redirect procedure.', 8900);
        _0xd05bx14('Redirecting to human verification screen', 9400);
        setTimeout(function() {
            _0xd05bx23()
        }, 12500);
    }
    $('.comment_btn')['click'](function() {
        sweetAlert('Error', 'You can post a message after using the generator tool.', 'error')
    });
});