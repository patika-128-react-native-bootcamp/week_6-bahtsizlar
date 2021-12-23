#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

@property (nonatomic, strong) UIWindow *window;

@end

   #if RCT_DEV
   #import <React/RCTDevLoadingView.h>
   #endif
   //...

   - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
   {
   //...
   RCTBridge *bridge = [[RCTBridge alloc] initWithBundleURL:jsCodeLocation
                 moduleProvider:nil
                  launchOptions:launchOptions];
   #if RCT_DEV
   [bridge moduleForClass:[RCTDevLoadingView class]];
   #endif

   RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                    moduleName:@"<AddYourAppNameHere>"
                 initialProperties:nil];
   //...
   }